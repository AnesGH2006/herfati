import { Star, MapPin, BadgeCheck, Briefcase, Banknote, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface ArtisanCardProps {
  id: number;
  name: string;
  category: string;
  daira: string;
  rating: number;
  reviews: number;
  priceStart: number;
  yearsOfExperience?: number;
  image: string;
  isVerified: boolean;
  portfolioImages?: string[];
}

export function ArtisanCard({ id, name, category, daira, rating, reviews, priceStart, yearsOfExperience = 0, image, isVerified, portfolioImages = [] }: ArtisanCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm" dir="rtl">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <Badge className="absolute top-3 right-3 bg-white/90 text-foreground backdrop-blur-sm hover:bg-white border-none shadow-sm font-bold">
          {category}
        </Badge>
        
        {isVerified && (
          <div className="absolute top-3 left-3 bg-primary text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1 shadow-lg font-bold">
            <BadgeCheck className="w-3 h-3" />
            <span>موثوق</span>
          </div>
        )}

        {portfolioImages.length > 0 && (
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-md">
            <ImageIcon className="w-3 h-3" />
            <span>+{portfolioImages.length} أعمال</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl group-hover:text-primary transition-colors">{name}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="w-3 h-3 ml-1 text-primary" />
              {daira}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-sm text-yellow-700 dark:text-yellow-400">{rating}</span>
            </div>
            <span className="text-[10px] text-muted-foreground">{reviews} مراجعة</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 py-3 border-y border-dashed border-border/50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <Banknote className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground">السعر يبدأ من</span>
              <span className="font-bold text-sm">{priceStart} دج</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-secondary/10 rounded-lg">
              <Briefcase className="w-4 h-4 text-secondary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground">الخبرة</span>
              <span className="font-bold text-sm">{yearsOfExperience} سنوات</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Link href={`/profile/${id}`} className="w-full">
          <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold transition-all h-11">
            عرض الملف الشخصي
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
