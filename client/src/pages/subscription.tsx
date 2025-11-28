import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Subscription() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1 py-16" dir="rtl">
        <div className="container px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl font-heading font-bold">خطط الاشتراك</h1>
            <p className="text-xl text-muted-foreground">اختر الخطة المناسبة لك، سواء كنت حرفياً أو زبوناً</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Customer Free Plan */}
            <Card className="border-2 h-full hover:border-primary/50 transition-all">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">زبون عادي</CardTitle>
                <CardDescription>للأشخاص الذين يبحثون عن خدمات</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold font-heading">مجاني</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>تصفح جميع الحرفيين</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>تواصل محدود (3 رسائل/يوم)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>تقييم الحرفيين</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">سجل مجاناً</Button>
              </CardFooter>
            </Card>

            {/* Artisan Standard Plan */}
            <Card className="border-2 border-primary relative shadow-2xl scale-105 z-10 h-full">
              <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                الأكثر طلباً
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">حرفي محترف</CardTitle>
                <CardDescription>للحرفيين المستقلين</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-heading">1000</span>
                  <span className="text-xl font-bold text-muted-foreground">دج / شهر</span>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary bg-primary/10 rounded-full p-1" />
                    <span>إنشاء ملف شخصي احترافي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary bg-primary/10 rounded-full p-1" />
                    <span>معرض أعمال (Portfolio)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary bg-primary/10 rounded-full p-1" />
                    <span>تواصل غير محدود مع الزبائن</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary bg-primary/10 rounded-full p-1" />
                    <span>الظهور في نتائج البحث المتقدمة</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 font-bold">اشترك الآن</Button>
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
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>شارة "مؤسسة موثقة"</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>إحصائيات متقدمة للزيارات</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">تواصل معنا</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
