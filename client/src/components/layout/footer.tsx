import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t pt-12 pb-6" dir="rtl">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">
                ح
              </div>
              <span className="text-xl font-bold font-heading text-primary">حرفتي</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منصتك الأولى في تيارت للتواصل مع أمهر الحرفيين. نجمع بين الأصالة والاحترافية لخدمتكم.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">الرئيسية</a></li>
              <li><a href="/artisans" className="hover:text-primary transition-colors">ابحث عن حرفي</a></li>
              <li><a href="/subscription" className="hover:text-primary transition-colors">الأسعار والاشتراكات</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">من نحن</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>تيارت، الجزائر</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+213 46 00 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@herfati.dz</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">تابعنا</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© 2024 حرفتي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
