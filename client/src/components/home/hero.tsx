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

          {/* Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl max-w-4xl mx-auto mt-8 flex flex-col md:flex-row gap-4"
          >
            <div className="flex-1 space-y-2 text-right">
              <label className="text-xs font-semibold text-muted-foreground mr-1">ماذا تبحث؟</label>
              <Select dir="rtl">
                <SelectTrigger className="border-0 shadow-none bg-transparent focus:ring-0 text-right px-0 text-base font-medium h-auto py-1">
                  <SelectValue placeholder="اختر الحرفة (نجار، سباك...)" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="w-px bg-gray-200 hidden md:block my-2"></div>
            <div className="h-px bg-gray-200 md:hidden mx-2"></div>

            <div className="flex-1 space-y-2 text-right">
               <label className="text-xs font-semibold text-muted-foreground mr-1">المنطقة (الدائرة)</label>
               <Select dir="rtl">
                <SelectTrigger className="border-0 shadow-none bg-transparent focus:ring-0 text-right px-0 text-base font-medium h-auto py-1">
                  <SelectValue placeholder="اختر الدائرة" />
                </SelectTrigger>
                <SelectContent>
                  {DAIRAS.map((daira) => (
                    <SelectItem key={daira} value={daira}>{daira}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button size="lg" className="h-auto py-3 px-8 text-lg md:w-auto w-full rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              <Search className="w-5 h-5 ml-2" />
              بحث
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
