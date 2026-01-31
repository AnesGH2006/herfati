import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Check, Mail, User, Phone, Briefcase, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DAIRAS, CATEGORIES } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

export default function Subscription() {
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم استلام طلبك!",
      description: "سنتواصل معك عبر البريد الإلكتروني لتفعيل حسابك الحرفي.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1 py-16" dir="rtl">
        <div className="container px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl font-heading font-bold">خطط الاشتراك للحرفيين</h1>
            <p className="text-xl text-muted-foreground">اختر الخطة التي تناسب نشاطك وابدأ في استقبال الطلبات اليوم</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Customer Free Plan - Simplified for clarity since artisans are the focus here */}
            <Card className="border-2 h-full opacity-60">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">حساب زبون</CardTitle>
                <CardDescription>للبحث والتواصل مع الحرفيين</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold font-heading">مجاني</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>تصفح جميع الحرفيين</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" disabled>سجل كزبون من صفحة الدخول</Button>
              </CardFooter>
            </Card>

            {/* Artisan Standard Plan */}
            <Card className="border-2 border-primary relative shadow-2xl scale-105 z-10 h-full">
              <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                الأكثر طلباً
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">حرفي محترف</CardTitle>
                <CardDescription>للحرفيين المستقلين في تيارت</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-heading">1000</span>
                  <span className="text-xl font-bold text-muted-foreground">دج / شهر</span>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary bg-primary/10 rounded-full p-1" />
                    <span>ملف شخصي احترافي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary bg-primary/10 rounded-full p-1" />
                    <span>معرض أعمال وتواصل غير محدود</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <JoinDialog plan="حرفي محترف" onSubmit={handleJoin} />
              </CardFooter>
            </Card>

            {/* Artisan Business Plan */}
            <Card className="border-2 h-full hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">ورشة / مؤسسة</CardTitle>
                <CardDescription>للورشات والشركات الصغيرة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-heading">2500</span>
                  <span className="text-xl font-bold text-muted-foreground">دج / شهر</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>كل مميزات باقة المحترف</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>إضافة حتى 5 موظفين</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <JoinDialog plan="ورشة / مؤسسة" onSubmit={handleJoin} />
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function JoinDialog({ plan, onSubmit }: { plan: string, onSubmit: (e: any) => void }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full bg-primary hover:bg-primary/90 font-bold">اشترك في باقة {plan}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" dir="rtl">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">التسجيل كحرفي - باقة {plan}</DialogTitle>
          <DialogDescription>
            أدخل معلوماتك المهنية وسنتواصل معك لتفعيل حسابك.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 pt-4">
          <div className="space-y-2 text-right">
            <Label>الاسم الكامل</Label>
            <div className="relative">
              <User className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="محمد علي" className="pr-9" required />
            </div>
          </div>
          <div className="space-y-2 text-right">
            <Label>البريد الإلكتروني</Label>
            <div className="relative">
              <Mail className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="email" placeholder="example@gmail.com" className="pr-9" required />
            </div>
          </div>
          <div className="space-y-2 text-right">
            <Label>رقم الهاتف</Label>
            <div className="relative">
              <Phone className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="06XXXXXXXX" className="pr-9" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 text-right">
              <Label>الحرفة</Label>
              <Select dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="اختر الحرفة" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map(cat => <SelectItem key={cat.id} value={cat.id}>{cat.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 text-right">
              <Label>الدائرة</Label>
              <Select dir="rtl">
                <SelectTrigger>
                  <SelectValue placeholder="اختر الدائرة" />
                </SelectTrigger>
                <SelectContent>
                  {DAIRAS.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full font-bold">إرسال طلب الانضمام</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
