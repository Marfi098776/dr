import { ImageWithFallback } from "@/components/ImgfallBack/Imgfallback";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/Hooks/useTranslation";

export function Hero() {
  const { t, isBangla } = useTranslation();

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-br from-secondary via-white to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className={`text-primary ${isBangla ? 'bangla' : ''}`}>{t("hero.badge")}</span>
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl text-foreground ${isBangla ? 'bangla' : ''}`}>
              {t("hero.title")}
            </h1>
            <p className={`text-lg text-muted-foreground ${isBangla ? 'bangla' : ''}`}>
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className={`${isBangla ? 'bangla' : ''}`} size="lg" onClick={scrollToAppointment}>
                {t("nav.bookAppointment")}
              </Button>
              <Button size="lg" variant="outline" className={`${isBangla ? 'bangla' : ''}`}>
                {t("hero.learnMore")}
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl text-primary">15+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl text-primary">5000+</div>
                <p className="text-muted-foreground">Happy Patients</p>
              </div>
              <div>
                <div className="text-3xl text-primary">98%</div>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1709813610121-e2a51545e212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lb3BhdGh5JTIwZG9jdG9yfGVufDF8fHx8MTc2MDAyMzQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Homeopathy Doctor"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}