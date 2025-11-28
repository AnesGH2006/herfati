import { Star, MapPin, BadgeCheck } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
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
  image: string;
  isVerified: boolean;
}

export function ArtisanCard({ id, name, category, daira, rating, reviews, priceStart, image, isVerified }: ArtisanCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50" dir="rtl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-white/90 text-foreground backdrop-blur-sm hover:bg-white">
          {category}
        </Badge>
        {isVerified && (
          <div className="absolute bottom-3 right-3 bg-primary/90 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
            <BadgeCheck className="w-3 h-3" />
            <span>موثوق</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-5 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-heading font-bold text-lg group-hover:text-primary transition-colors">{name}</h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="w-3 h-3 ml-1" />
              {daira}
            </div>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md border border-yellow-100">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-sm text-yellow-700">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        </div>
        
        <div className="pt-2 border-t border-dashed">
          <p className="text-sm text-muted-foreground">
            يبدأ السعر من: <span className="font-bold text-foreground text-base">{priceStart} دج</span>
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Link href={`/profile/${id}`} className="w-full">
          <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white font-bold shadow-none hover:shadow-md transition-all">
            عرض الملف الشخصي
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
