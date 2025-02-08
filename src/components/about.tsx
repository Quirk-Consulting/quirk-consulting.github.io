//an about page with general information about the project
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const About = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          This is a simple project to showcase how to build a design system
          using React and TypeScript. It includes a set of components that can
          be used to build a website or web application.
        </p>
        <p>
          The project uses Tailwind CSS for styling and Lucide icons for the
          icon set. The source code is available on{" "}
          <a href="" className="text-primary">
            GitHub
          </a>
          .
        </p>
        <p>
          Feel free to use this project as a starting point for your own design
          system or component library. If you have any questions or feedback,
          please let me know!
        </p>
      </CardContent>
    </Card>
  );
};
