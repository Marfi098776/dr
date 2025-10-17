import { ImageWithFallback } from "@/components/ImgfallBack/Imgfallback";
import { Award, GraduationCap, Users } from "lucide-react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

export function AboutDoctor() {

  useEffect(() => {
    AOS.init({ once: true, duration: 1000, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform -rotate-3"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758691462123-8a17ae95d203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjb25zdWx0YXRpb24lMjBkb2N0b3J8ZW58MXx8fHwxNzYwMDIzNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Dr. Sarah Mitchell"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6" data-aos="fade-down"
            data-aos-delay="200">
            <div>
              <h2 className="text-3xl sm:text-4xl text-foreground mb-2 font-semibold">Meet Dr. Sarah Mitchell</h2>
              <p className="text-primary">MD (Hom), BHMS, Certified Homeopath</p>
            </div>

            <p className="text-muted-foreground">
              With over 15 years of experience in classical homeopathy, Dr. Sarah Mitchell is dedicated to providing personalized, holistic care to patients of all ages. Her approach combines traditional homeopathic principles with modern diagnostic methods to ensure the best possible outcomes for her patients.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4" data-aos="fade-up"
                data-aos-delay="300">
                <div className="p-3 bg-white rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Education & Training</h4>
                  <p className="text-muted-foreground">
                    Graduated from National Institute of Homeopathy with distinction
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-up"
                data-aos-delay="450">
                <div className="p-3 bg-white rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Recognition</h4>
                  <p className="text-muted-foreground">
                    Awarded Best Homeopath of the Year 2023
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-aos="fade-up"
                data-aos-delay="600">
                <div className="p-3 bg-white rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Patient Care</h4>
                  <p className="text-muted-foreground">
                    Successfully treated over 5000 patients with various chronic conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}