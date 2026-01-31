import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Check, Mail, User, Phone, MapPin, Calendar, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DAIRAS, CATEGORIES } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Subscription() {
  const { toast } = useToast();
  const [duration, setDuration] = useState("1");

  const plans = {
    "1": 4000,
    "3": 11000, // Discounted
    "6": 20000  // More discount
  };

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
            <h1 className="text-4xl font-heading font-bold">باقة الحرفي المتميز</h1>
            <p className="text-xl text-muted-foreground">خطة واحدة بسيطة وشاملة لنمو نشاطك في تيارت</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary relative shadow-2xl z-10">
              <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                الباقة الشاملة
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-3xl font-heading text-primary">حرفي محترف</CardTitle>
                <CardDescription className="text-lg">كل ما تحتاجه للنجاح في منصة حرفتي</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
                  <Label className="text-base font-bold mb-4 block">اختر مدة الاشتراك:</Label>
                  <Tabs defaultValue="1" className="w-full" onValueChange={setDuration}>
                    <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-background/50">
                      <TabsTrigger value="1" className="py-3 flex flex-col">
                        <span className="font-bold">شهر واحد</span>
                        <span className="text-xs opacity-70">4000 دج</span>
                      </TabsTrigger>
                      <TabsTrigger value="3" className="py-3 flex flex-col">
                        <span className="font-bold">3 أشهر</span>
                        <span className="text-xs opacity-70">11,000 دج</span>
                      </TabsTrigger>
                      <TabsTrigger value="6" className="py-3 flex flex-col">
                        <span className="font-bold">6 أشهر</span>
                        <span className="text-xs opacity-70">20,000 دج</span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="space-y-4 px-4">
                  <h3 className="font-bold text-lg border-b pb-2">مميزات الباقة:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FeatureItem text="ملف شخصي احترافي كامل" />
                    <FeatureItem text="معرض أعمال غير محدود الصور" />
                    <FeatureItem text="تواصل مباشر مع الزبائن" />
                    <FeatureItem text="ظهور مميز في نتائج البحث" />
                    <FeatureItem text="إحصائيات لزيارات ملفك" />
                    <FeatureItem text="دعم فني مخصص" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <JoinDialog plan={`${duration} أشهر`} onSubmit={handleJoin} />
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary/10 rounded-full p-1">
        <Check className="w-4 h-4 text-primary" />
      </div>
      <span className="text-sm">{text}</span>
    </div>
  );
}

function JoinDialog({ plan, onSubmit }: { plan: string, onSubmit: (e: any) => void }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full h-14 text-xl bg-primary hover:bg-primary/90 font-bold shadow-xl shadow-primary/20">
          <CreditCard className="ml-2 w-6 h-6" />
          اشترك الآن
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" dir="rtl">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">التسجيل كحرفي - باقة {plan}</DialogTitle>
          <DialogDescription>
            أدخل معلوماتك المهنية وسنتواصل معك لتفعيل حسابك وبدء استقبال الطلبات.
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
          <Button type="submit" className="w-full h-12 text-lg font-bold mt-4">إرسال طلب الانضمام</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
