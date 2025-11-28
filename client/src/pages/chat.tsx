import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MOCK_MESSAGES, MOCK_ARTISANS } from "@/lib/constants";
import { Send, Paperclip, Phone, Video, MoreVertical, Image as ImageIcon, Smile } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRoute } from "wouter";
import chatBg from "@assets/generated_images/modern_chat_interface_abstract_background_with_geometric_patterns.png";

export default function Chat() {
  const [match, params] = useRoute("/chat/:id");
  const activeId = params ? parseInt(params.id) : null;
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [inputText, setInputText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeArtisan = activeId 
    ? MOCK_ARTISANS.find(a => a.id === activeId) 
    : MOCK_ARTISANS[0];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      senderId: "customer",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true,
    };
    setMessages([...messages, newMsg]);
    setInputText("");
  };

  return (
    <div className="h-screen flex flex-col bg-background font-sans overflow-hidden">
      <Navbar />
      
      <div className="flex-1 flex overflow-hidden pt-0" dir="rtl">
        {/* Sidebar List (Hidden on mobile if chat open, but simplified for this mock) */}
        <div className="w-80 border-l bg-muted/10 hidden md:flex flex-col">
          <div className="p-4 border-b">
            <h2 className="font-heading font-bold text-xl mb-4">الرسائل</h2>
            <Input placeholder="بحث في المحادثات..." className="bg-white" />
          </div>
          <ScrollArea className="flex-1">
            {MOCK_ARTISANS.map((artisan) => (
              <div 
                key={artisan.id} 
                className={`p-4 flex gap-3 items-center hover:bg-muted/50 cursor-pointer transition-colors ${activeId === artisan.id ? 'bg-primary/5 border-r-4 border-primary' : ''}`}
                onClick={() => window.location.href = `/chat/${artisan.id}`}
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={artisan.image} />
                    <AvatarFallback>{artisan.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm truncate">{artisan.name}</h3>
                    <span className="text-xs text-muted-foreground">10:30</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">مرحباً، هل يمكنني مساعدتك؟</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white relative">
          {/* Chat Header */}
          <div className="h-16 border-b flex items-center justify-between px-4 bg-white/80 backdrop-blur-md z-10 shadow-sm">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border">
                <AvatarImage src={activeArtisan?.image} />
                <AvatarFallback>{activeArtisan?.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-bold text-sm font-heading">{activeArtisan?.name}</h2>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  متصل الآن
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon"><Phone className="w-5 h-5 text-muted-foreground" /></Button>
              <Button variant="ghost" size="icon"><Video className="w-5 h-5 text-muted-foreground" /></Button>
              <Button variant="ghost" size="icon"><MoreVertical className="w-5 h-5 text-muted-foreground" /></Button>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-4 relative" 
            ref={scrollRef}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
              <img src={chatBg} className="w-full h-full object-cover" alt="bg" />
            </div>

            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.isMe ? 'justify-start' : 'justify-end'} relative z-10`}
              >
                <div 
                  className={`max-w-[80%] md:max-w-[60%] rounded-2xl px-4 py-3 shadow-sm ${
                    msg.isMe 
                      ? 'bg-primary text-primary-foreground rounded-tr-none' 
                      : 'bg-muted rounded-tl-none'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <span className={`text-[10px] mt-1 block ${msg.isMe ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white z-10">
            <div className="flex items-center gap-2 bg-muted/30 p-2 rounded-xl border border-input/50 focus-within:ring-1 focus-within:ring-ring transition-all">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary shrink-0">
                <Smile className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary shrink-0">
                <Paperclip className="w-5 h-5" />
              </Button>
              <input 
                type="text" 
                className="flex-1 bg-transparent border-none focus:outline-none px-2 text-sm h-9"
                placeholder="اكتب رسالتك هنا..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              {inputText.trim() ? (
                 <Button size="icon" className="h-9 w-9 rounded-lg shrink-0 transition-all" onClick={handleSend}>
                   <Send className="w-4 h-4" />
                 </Button>
              ) : (
                 <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary shrink-0">
                    <ImageIcon className="w-5 h-5" />
                 </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
