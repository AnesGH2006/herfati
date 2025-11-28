import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArtisanCard } from "@/components/artisan/artisan-card";
import { MOCK_ARTISANS, DAIRAS, CATEGORIES } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Artisans() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1 container px-4 md:px-8 py-8" dir="rtl">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Mobile Filter Trigger */}
          <div className="md:hidden flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="بحث بالاسم..." className="pr-9" />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" dir="rtl" className="w-[300px]">
                <div className="mt-6">
                  <Filters />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-64 shrink-0 space-y-6 sticky top-24 h-fit">
            <div className="space-y-2">
              <h2 className="font-heading font-bold text-xl">تصفية متقدمة</h2>
              <p className="text-sm text-muted-foreground">اعثر على الحرفي المناسب</p>
            </div>
            <div className="relative">
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="بحث بالاسم..." className="pr-9" />
            </div>
            <Filters />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl font-heading font-bold mb-2">جميع الحرفيين</h1>
              <p className="text-muted-foreground">عرض {MOCK_ARTISANS.length} حرفي متاح في تيارت</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_ARTISANS.map((artisan) => (
                <ArtisanCard key={artisan.id} {...artisan} />
              ))}
              {/* Duplicate for demo purposes to fill grid */}
              {MOCK_ARTISANS.map((artisan) => (
                <ArtisanCard key={`dup-${artisan.id}`} {...artisan} id={artisan.id + 10} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Filters() {
  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible defaultValue="categories" className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger className="font-heading font-bold">التصنيف</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id={`cat-${cat.id}`} />
                  <Label htmlFor={`cat-${cat.id}`} className="text-sm font-normal cursor-pointer">{cat.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger className="font-heading font-bold">المنطقة (الدائرة)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2 h-48 overflow-y-auto pl-2 custom-scrollbar">
              {DAIRAS.map((daira) => (
                <div key={daira} className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox id={`loc-${daira}`} />
                  <Label htmlFor={`loc-${daira}`} className="text-sm font-normal cursor-pointer">{daira}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="font-heading font-bold">السعر</AccordionTrigger>
          <AccordionContent>
            <div className="pt-4 px-2 space-y-4">
              <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>0 دج</span>
                <span>+10000 دج</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Button className="w-full mt-4">تطبيق التصفية</Button>
    </div>
  );
}
