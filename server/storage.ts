import { 
  type User, 
  type InsertUser, 
  type Artisan, 
  type InsertArtisan,
  type Message,
  type InsertMessage,
  type Conversation,
  type InsertConversation,
  users,
  artisans,
  messages,
  conversations
} from "@shared/schema";
import { db } from "./db";
import { eq, and, or, desc, ilike, inArray, sql } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getArtisan(id: number): Promise<Artisan | undefined>;
  getArtisans(filters?: {
    category?: string;
    daira?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
  }): Promise<Artisan[]>;
  createArtisan(artisan: InsertArtisan): Promise<Artisan>;
  updateArtisan(id: number, updates: Partial<InsertArtisan>): Promise<Artisan | undefined>;
  
  getConversation(id: string): Promise<Conversation | undefined>;
  getConversationsByUser(userId: string, role: 'artisan' | 'customer'): Promise<Conversation[]>;
  createConversation(conversation: InsertConversation): Promise<Conversation>;
  
  getMessages(conversationId: string): Promise<Message[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  markMessagesAsRead(conversationId: string, userId: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getArtisan(id: number): Promise<Artisan | undefined> {
    const [artisan] = await db.select().from(artisans).where(eq(artisans.id, id));
    return artisan || undefined;
  }

  async getArtisans(filters?: {
    category?: string;
    daira?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
  }): Promise<Artisan[]> {
    let query = db.select().from(artisans);
    
    const conditions = [];
    
    if (filters?.category) {
      conditions.push(eq(artisans.category, filters.category));
    }
    
    if (filters?.daira) {
      conditions.push(eq(artisans.daira, filters.daira));
    }
    
    if (filters?.search) {
      conditions.push(
        or(
          ilike(artisans.name, `%${filters.search}%`),
          ilike(artisans.description, `%${filters.search}%`)
        )
      );
    }
    
    if (filters?.minPrice !== undefined) {
      conditions.push(sql`${artisans.priceStart} >= ${filters.minPrice}`);
    }
    
    if (filters?.maxPrice !== undefined) {
      conditions.push(sql`${artisans.priceStart} <= ${filters.maxPrice}`);
    }
    
    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }
    
    const result = await query.orderBy(desc(artisans.rating));
    return result;
  }

  async createArtisan(insertArtisan: InsertArtisan): Promise<Artisan> {
    const [artisan] = await db
      .insert(artisans)
      .values(insertArtisan)
      .returning();
    return artisan;
  }

  async updateArtisan(id: number, updates: Partial<InsertArtisan>): Promise<Artisan | undefined> {
    const [artisan] = await db
      .update(artisans)
      .set(updates)
      .where(eq(artisans.id, id))
      .returning();
    return artisan || undefined;
  }

  async getConversation(id: string): Promise<Conversation | undefined> {
    const [conversation] = await db
      .select()
      .from(conversations)
      .where(eq(conversations.id, id));
    return conversation || undefined;
  }

  async getConversationsByUser(userId: string, role: 'artisan' | 'customer'): Promise<Conversation[]> {
    const result = await db
      .select()
      .from(conversations)
      .where(
        role === 'customer' 
          ? eq(conversations.customerId, userId)
          : sql`${conversations.artisanId}::text = ${userId}`
      )
      .orderBy(desc(conversations.lastMessageAt));
    return result;
  }

  async createConversation(insertConversation: InsertConversation): Promise<Conversation> {
    const [conversation] = await db
      .insert(conversations)
      .values(insertConversation)
      .returning();
    return conversation;
  }

  async getMessages(conversationId: string): Promise<Message[]> {
    const result = await db
      .select()
      .from(messages)
      .where(eq(messages.conversationId, conversationId))
      .orderBy(messages.createdAt);
    return result;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    
    await db
      .update(conversations)
      .set({
        lastMessageAt: new Date(),
        lastMessage: insertMessage.content,
      })
      .where(eq(conversations.id, insertMessage.conversationId));
    
    return message;
  }

  async markMessagesAsRead(conversationId: string, userId: string): Promise<void> {
    await db
      .update(messages)
      .set({ isRead: true })
      .where(
        and(
          eq(messages.conversationId, conversationId),
          eq(messages.receiverId, userId),
          eq(messages.isRead, false)
        )
      );
  }
}

export const storage = new DatabaseStorage();
