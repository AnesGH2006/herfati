import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DAIRAS, CATEGORIES } from "@/lib/constants";
import heroImage from "@assets/generated_images/algerian_artisan_working_on_pottery_or_leather_in_a_bright_workshop.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Algerian Artisan" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight"
          >
            اعثر على أمهر الحرفيين <br/> في <span className="text-primary-foreground bg-primary/90 px-2 rounded-md">تيارت</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            منصة تجمع بين الخبرة والإتقان. تصفح مئات الحرفيين، قارن الأسعار، وتواصل مباشرة.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
