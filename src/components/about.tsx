import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Package, Mail } from "lucide-react";
import { Logo } from "@/components/logo/Logo";

export const About = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto">
      <Card className="transition-all duration-300 bg-white shadow-lg hover:shadow-xl">
        <CardHeader className="space-y-6">
          <div className="flex justify-center pt-4">
            <div className="flex justify-center pt-4">
              <Logo className="w-auto h-16 md:h-24" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-center text-gray-900">
            Welcome to Our Icon Library
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed animate-fade-in">
              Founded on a decade of experience in enterprise project delivery
              and digital transformation, Quirk has established itself as a
              premier Atlassian Services and Marketplace Partner. From our
              headquarters in Australia, we serve a global clientele with a
              singular vision: if you can see it, you can solve it.
            </p>

            <p className="leading-relaxed">
              We believe that true business transformation begins when
              organisations can clearly visualise their workflows. That's why
              we've created this icon library - to help you bring clarity to
              your Jira projects and make your work more visible and manageable.
            </p>

            <div className="flex flex-col gap-4 pt-6 md:flex-row">
              <a
                href="https://marketplace.atlassian.com/vendors/1217451/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button variant="outline" className="w-full md:w-auto">
                  <Package className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                  Explore Our Marketplace Apps
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <a
                href="https://www.quirk.com.au/services/atlassian-consulting-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button variant="outline" className="w-full md:w-auto">
                  <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                  View Our Services
                </Button>
              </a>
            </div>

            <div className="p-4 mt-8 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold">
                Need Additional Support?
              </h3>
              <p className="mb-4">
                Our team is here to help you transform project chaos into
                clarity and efficiency. Whether you need assistance with icon
                implementation or want to explore our broader services, we're
                just a message away.
              </p>
              <a href="www.quirk.com.au/contact" className="group">
                <Button className="w-full bg-green-600 md:w-auto hover:bg-green-700">
                  <Mail className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                  Contact the Quirk Team
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
