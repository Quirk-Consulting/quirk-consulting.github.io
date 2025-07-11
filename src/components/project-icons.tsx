import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectIcons() {
  return (
    <div className="max-w-4xl p-6 mx-auto">
      <Card className="transition-all duration-300 shadow-lg bg-background hover:shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold">Project Icons</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center p-12">
              <div className="space-y-6 text-center">
                <div className="flex justify-center space-x-4">
                  <div className="text-6xl animate-bounce">⌛</div>
                </div>

                <h2 className="text-2xl font-semibold animate-fade-in">
                  Coming Soon! 🚀
                </h2>

                <p className="text-lg text-muted-foreground">
                  Our team of pixel-perfect perfectionists are sourcing
                  beautiful icons to help bring clarity to your Jira projects.
                </p>
              </div>
            </div>

            <div className="p-4 mt-8 border rounded-lg bg-muted">
              <h3 className="mb-2 text-lg font-semibold">
                Want to be the first to know? 🔔
              </h3>
              <p className="mb-4 text-muted-foreground">
                We're working hard to launch soon. In the meantime, why not
                explore our other tools and services that help turn chaos into
                clarity?
              </p>
              <div className="flex flex-col gap-4 pt-2 md:flex-row">
                <p className="text-sm text-muted-foreground">
                  Check back soon for our growing collection of project icons!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectIcons;
