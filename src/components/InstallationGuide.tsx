import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud, Database } from "lucide-react";

export function InstallationGuide() {
  return (
    <div className="max-w-4xl p-6 mx-auto">
      <Card className="transition-all duration-300 shadow-lg bg-background hover:shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold">How To Use Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">🔍 Finding Your Icon</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <ol className="ml-6 space-y-3 list-decimal">
                <li>
                  <strong>Navigate to Work Type Icons</strong> in the sidebar
                </li>
                <li>
                  <strong>Search for your icon</strong> using one of these
                  methods:
                  <div className="pl-8 mt-2 space-y-2">
                    <div>
                      • Use the <strong>Search bar</strong> at the top to find a
                      specific icon by name or keyword
                    </div>
                    <div>
                      • <strong>Browse by category</strong> by scrolling down to
                      the desired section
                    </div>
                    <div>
                      • <strong>Filter by category</strong> using the category
                      selector if available
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">📥 Downloading Your Icon</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Once you've found the perfect icon:</p>
              <ol className="ml-6 space-y-3 list-decimal">
                <li>
                  <strong>Select the icon</strong> by clicking on it
                </li>
                <li>
                  <strong>Choose your colour scheme</strong> from the available
                  options
                </li>
                <li>
                  <strong>Select your download format</strong>:
                  <div className="pl-8 mt-2 space-y-2">
                    <div>
                      • <strong>Download PNG</strong> - Use this if you want to
                      use the icon as-is without modifications
                    </div>
                    <div>
                      • <strong>Download SVG</strong> - Use this if you want to
                      modify the source file before uploading (recommended for
                      customisation)
                    </div>
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
                  Data Centre
                </TabsTrigger>
              </TabsList>

              {/* Cloud Instructions */}
              <TabsContent value="cloud" className="space-y-8">
                <div className="space-y-4">
                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Issue Type Icons</h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>
                          <strong>Navigate to your Jira site</strong> and log in
                          as an administrator
                        </li>
                        <li>
                          Go to <strong>Settings</strong> (⚙️) →{" "}
                          <strong>Issues</strong>
                        </li>
                        <li>
                          Under <strong>Issue Types</strong>, click{" "}
                          <strong>Issue types</strong>
                        </li>
                        <li>
                          Select the issue type you want to update or{" "}
                          <strong>Create issue type</strong> for a new one
                        </li>
                        <li>
                          Click <strong>Edit</strong> next to the issue type
                        </li>
                        <li>
                          In the <strong>Avatar</strong> section, click{" "}
                          <strong>Choose file</strong>
                        </li>
                        <li>
                          <strong>Upload your downloaded icon</strong> (PNG or
                          SVG)
                        </li>
                        <li>
                          <strong>Save</strong> your changes
                        </li>
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
                          <strong>Navigate to your Jira instance</strong> and
                          log in as an administrator
                        </li>
                        <li>
                          Go to <strong>Administration</strong> →{" "}
                          <strong>Issues</strong>
                        </li>
                        <li>
                          Under <strong>Issue Attributes</strong>, click{" "}
                          <strong>Issue types</strong>
                        </li>
                        <li>
                          Select the issue type you want to update or{" "}
                          <strong>Add issue type</strong> for a new one
                        </li>
                        <li>
                          Click <strong>Edit</strong> next to the issue type
                        </li>
                        <li>
                          In the <strong>Avatar</strong> section, click{" "}
                          <strong>Browse</strong> or{" "}
                          <strong>Choose file</strong>
                        </li>
                        <li>
                          <strong>Upload your downloaded icon</strong> (PNG or
                          SVG)
                        </li>
                        <li>
                          <strong>Save</strong> your changes
                        </li>
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

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">
              📋 File Format Recommendations
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <ul className="ml-6 space-y-2 list-disc">
                <li>
                  <strong>PNG files</strong> are ready to use immediately and
                  work well for most use cases
                </li>
                <li>
                  <strong>SVG files</strong> offer better scalability and can be
                  modified before upload if needed
                </li>
                <li>
                  Both formats are supported by Jira Cloud and Data
                  Centre/Server versions
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">🔧 Troubleshooting</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <div className="space-y-3">
                <div>
                  <strong>Icon not displaying correctly?</strong>
                  <ul className="mt-1 ml-6 space-y-1 list-disc">
                    <li>Ensure your icon file is under 1MB in size</li>
                    <li>Try using PNG format if SVG isn't working</li>
                    <li>Clear your browser cache and refresh Jira</li>
                  </ul>
                </div>
                <div>
                  <strong>Don't have admin access?</strong>
                  <ul className="mt-1 ml-6 space-y-1 list-disc">
                    <li>
                      Contact your Jira administrator to upload the icon for you
                    </li>
                    <li>
                      Share the downloaded icon file and this guide with them
                    </li>
                  </ul>
                </div>
                <div>
                  <strong>Need a different colour or style?</strong>
                  <ul className="mt-1 ml-6 space-y-1 list-disc">
                    <li>
                      Download the SVG version and modify it using design
                      software
                    </li>
                    <li>
                      Or browse our other colour schemes available for each icon
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">💬 Need Help?</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                If you encounter any issues or need assistance with implementing
                these icons in your Jira instance, visit{" "}
                <a
                  href="https://www.quirk.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  quirk.com.au
                </a>{" "}
                for expert guidance on work management and enterprise tooling
                solutions.
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

export default InstallationGuide;
