import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud, Database } from "lucide-react";

export function InstallationGuide() {
  return (
    <div className="max-w-4xl p-6 mx-auto">
      <Card className="transition-all duration-300 shadow-lg bg-background hover:shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold">
            Installation Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">
              🌱 Selecting and Downloading Icons
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <ol className="ml-6 space-y-3 list-decimal">
                <li>
                  Browse through the icon categories using the left sidebar
                </li>
                <li>Click on an icon to select it</li>
                <li>Use the colour picker to choose your preferred variant</li>
                <li>
                  Click the download button and select either:
                  <div className="pl-8 mt-2 space-y-2">
                    <div>• SVG - For best quality and scalability</div>
                    <div>• PNG - If your system doesn't support SVG</div>
                  </div>
                </li>
              </ol>
              <div className="pt-2">
                After downloading your icon, follow the installation steps below
                based on your Jira deployment:
              </div>
            </div>
          </section>

          <div className="p-4 mt-8 border rounded-lg bg-muted">
            <Tabs defaultValue="cloud" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="cloud" className="flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  Cloud
                </TabsTrigger>
                <TabsTrigger value="dc" className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  Data Center
                </TabsTrigger>
              </TabsList>

              {/* Cloud Instructions */}
              <TabsContent value="cloud" className="space-y-8">
                <div className="space-y-4">
                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Issue Type Icons</h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>Navigate to your Jira Cloud instance settings</li>
                        <li>Go to Issues {">"} Issue Types</li>
                        <li>Click the "Add issue type" button</li>
                        <li>Select "Create issue type"</li>
                        <li>
                          Upload your icon in the "Upload an image" section
                        </li>
                        <li>Configure other issue type settings as needed</li>
                        <li>Click "Add" to save the new issue type</li>
                      </ol>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">
                      Jira Project Icons
                    </h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>Open your Jira project</li>
                        <li>Click "Project settings" in the left sidebar</li>
                        <li>Select "Details" from the settings menu</li>
                        <li>Click on the project avatar/icon</li>
                        <li>Choose "Upload an image" and select your icon</li>
                        <li>Use the crop tool to adjust if needed</li>
                        <li>Click "Save" to apply the new project icon</li>
                      </ol>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">
                      Confluence Space Icons
                    </h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>Go to your Confluence space</li>
                        <li>
                          Click "Space settings" in the bottom left sidebar
                        </li>
                        <li>
                          Select "Space details" under the Settings section
                        </li>
                        <li>Click the space avatar/icon</li>
                        <li>Choose "Upload an image" and select your icon</li>
                        <li>
                          Adjust the image using the crop tool if necessary
                        </li>
                        <li>Click "Save" to apply the new space icon</li>
                      </ol>
                    </div>
                  </section>
                </div>
              </TabsContent>

              {/* Data Center Instructions */}
              <TabsContent value="dc" className="space-y-8">
                <div className="space-y-4">
                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Issue Type Icons</h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>
                          Log in as an administrator to your Jira Data Center
                          instance
                        </li>
                        <li>Go to Settings {">"} Issues</li>
                        <li>Select "Issue Types" from the sidebar</li>
                        <li>Click "Add issue type"</li>
                        <li>Choose "Create issue type"</li>
                        <li>
                          After creating, click the avatar icon next to the
                          issue type
                        </li>
                        <li>Select "Upload an image" and choose your icon</li>
                        <li>Click "Save" to apply the changes</li>
                      </ol>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">
                      Jira Project Icons
                    </h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>Navigate to your Jira project</li>
                        <li>Click the "Project settings" gear icon</li>
                        <li>Look for "Avatar" in the left sidebar</li>
                        <li>Click "Choose File" under "Upload new avatar"</li>
                        <li>Select your icon file</li>
                        <li>
                          Use the cropping tool to adjust the image if needed
                        </li>
                        <li>Click "Save" to apply the new project icon</li>
                      </ol>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">
                      Confluence Space Icons
                    </h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>Access your Confluence space</li>
                        <li>Click "Space tools" in the left sidebar</li>
                        <li>Select "Overview" from the dropdown</li>
                        <li>Click "Edit Space Details"</li>
                        <li>Look for the "Space Logo" section</li>
                        <li>Click "Browse" to upload your new icon</li>
                        <li>Adjust using the crop tool if necessary</li>
                        <li>Click "Save" to apply the new space icon</li>
                      </ol>
                    </div>
                  </section>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default InstallationGuide;
