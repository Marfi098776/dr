import { Link } from 'react-router';
import { useTranslation } from '../../Hooks/useTranslation';
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import logo from '../../assets/10. Logo Horizontal.png'


const Footer = () => {
  const { t, isBangla } = useTranslation();
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full flex items-center justify-center">
              <Link to="/" className='w-50'>
                <img src={logo} className='' alt="" />
              </Link>
              </div>
              
            </div>
            <p className={`text-white/80 text-sm ${isBangla ? 'bangla' : ''}`}>
              {t("footer.about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-white mb-4 ${isBangla ? 'bangla' : ''}`}>{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className={`text-white/80 hover:text-white transition-colors ${isBangla ? 'bangla' : ''}`}>
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#services" className={`text-white/80 hover:text-white transition-colors ${isBangla ? 'bangla' : ''}`}>
                  {t("nav.service")}
                </a>
              </li>
              <li>
                <a href="#about" className={`text-white/80 hover:text-white transition-colors ${isBangla ? 'bangla' : ''}`}>
                  {t("footer.aboutDoctor")}
                </a>
              </li>
              <li>
                <a href="#blog" className={`text-white/80 hover:text-white transition-colors ${isBangla ? 'bangla' : ''}`}>
                  {t("nav.blog")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm">
              <li className={`text-white/80 ${isBangla ? 'bangla' : ''}`}>{t("footer.skinTreatment")}</li>
              <li className={`text-white/80 ${isBangla ? 'bangla' : ''}`}>{t("footer.allergyRelief")}</li>
              <li className={`text-white/80 ${isBangla ? 'bangla' : ''}`}>{t("footer.childHealth")}</li>
              <li className={`text-white/80 ${isBangla ? 'bangla' : ''}`}>{t("footer.chronicDiseases")}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  123 Wellness Street,<br />
                  Green Valley, CA 94102
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">info@naturahomeopathy.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Twitter"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="tiktok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.5" viewBox="0 0 448 512"><path fill="#ffffff" d="M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
