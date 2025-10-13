import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/Hooks/useTranslation";
import { Baby, Droplet, Heart } from "lucide-react";

export function Services() {
   const { t, isBangla } = useTranslation();

  const services = [
    {
      icon: <Droplet className="w-12 h-12 text-primary" />,
      title: t("services.skin.title"),
      description: t("services.skin.description")
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: t("services.allergy.title"),
      description: t("services.allergy.description")
    },
    {
      icon: <Baby className="w-12 h-12 text-primary" />,
      title: t("services.child.title"),
      description: t("services.child.description")
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-6 ${isBangla ? 'bangla' : ''}`}>{t("services.title")}</h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isBangla ? 'bangla' : ''}`}>
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 p-4 bg-secondary rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className={`text-xl ${isBangla ? 'bangla' : ''}`}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={`text-base ${isBangla ? 'bangla' : ''}`}>
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}