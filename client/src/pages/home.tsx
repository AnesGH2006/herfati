import { Hero } from "@/components/home/hero";
import { ArtisanCard } from "@/components/artisan/artisan-card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { MOCK_ARTISANS } from "@/lib/constants";
import { ArrowLeft, ShieldCheck, Users, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section className="py-16 bg-white" dir="rtl">
          <div className="container px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/5 border border-secondary/10 hover:shadow-md transition-all">
                <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">حرفيين موثوقين</h3>
                <p className="text-muted-foreground">يتم التحقق من هوية ومهارة كل حرفي لضمان جودة الخدمة وسلامتك.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-primary/5 border border-primary/10 hover:shadow-md transition-all">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">تواصل مباشر</h3>
                <p className="text-muted-foreground">نظام محادثة متطور يسهل عليك الاتفاق على التفاصيل والأسعار بكل سهولة.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-accent/50 border border-accent/60 hover:shadow-md transition-all">
                <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mb-4 text-foreground">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">جودة مضمونة</h3>
                <p className="text-muted-foreground">نظام تقييم شفاف يساعدك في اختيار الأفضل لمشروعك بناءً على تجارب الآخرين.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Artisans */}
        <section className="py-16 bg-muted/30" dir="rtl">
          <div className="container px-4 md:px-8">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold font-heading text-foreground">حرفيين مميزين</h2>
                <p className="text-muted-foreground mt-2">نخبة من أفضل الحرفيين في ولاية تيارت</p>
              </div>
              <Link href="/artisans">
                <Button variant="outline" className="gap-2 hidden md:flex">
                  عرض الجميع
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MOCK_ARTISANS.map((artisan) => (
                <ArtisanCard key={artisan.id} {...artisan} />
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link href="/artisans">
                <Button variant="outline" className="w-full gap-2">
                  عرض الجميع
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden" dir="rtl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
          <div className="container px-4 md:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">هل أنت حرفي ماهر؟</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              انضم إلى آلاف الحرفيين في تيارت وضاعف دخلك من خلال الوصول إلى عملاء جدد يبحثون عن خدماتك.
            </p>
            <Link href="/subscription">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                سجل الآن وابدأ العمل
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
