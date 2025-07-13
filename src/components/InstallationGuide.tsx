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
              <p>Our icon library contains three main categories:</p>
              <ul className="ml-6 space-y-2 list-disc">
                <li><strong>Work Type Icons</strong> - For Jira issue types, work items, and task categorisation</li>
                <li><strong>Project Icons</strong> - For Jira projects, Confluence spaces, and team identification</li>
                <li><strong>User Avatars</strong> - For user profiles and team member identification</li>
              </ul>
              <ol className="ml-6 space-y-3 list-decimal">
                <li>
                  <strong>Navigate to the desired section</strong> using the sidebar
                </li>
                <li>
                  <strong>Search for your icon</strong> using one of these methods:
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
                  options (Work Type and Project Icons only)
                </li>
                <li>
                  <strong>Select your download format</strong>:
                  <div className="pl-8 mt-2 space-y-2">
                    <div>
                      • <strong>Download PNG</strong> - Recommended for most use cases, ready to use immediately
                    </div>
                    <div>
                      • <strong>Download SVG</strong> - Use if you want to modify colours or styling before uploading
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
                    <h2 className="text-xl font-semibold">Work Type Icons (Issue Types)</h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <p>Add custom icons to issue types to improve visual recognition and categorisation.</p>
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
                          <strong>Upload your downloaded icon</strong> (PNG recommended, max 1MB)
                        </li>
                        <li>
                          <strong>Save</strong> your changes
                        </li>
                      </ol>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">
                      Project Icons
                    </h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <p>Customise project avatars to make them easily identifiable and visually appealing.</p>
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>Open your Jira project</li>
                        <li>Click <strong>Project settings</strong> in the left sidebar</li>
                        <li>Select <strong>Details</strong> from the settings menu</li>
                        <li>Click on the current project avatar/icon</li>
                        <li>Choose <strong>Upload an image</strong> and select your downloaded icon</li>
                        <li>Use the crop tool to adjust the image positioning if needed</li>
                        <li>Click <strong>Save</strong> to apply the new project icon</li>
                      </ol>
                      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          <strong>Tip:</strong> Project icons appear in project lists, dashboards, and navigation menus.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">
                      User Avatars
                    </h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <p>Set professional and personalised user profile pictures for team members.</p>
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>Click on your <strong>profile picture</strong> in the top-right corner of Jira</li>
                        <li>Select <strong>Profile</strong> from the dropdown menu</li>
                        <li>Click on your current avatar image</li>
                        <li>Choose <strong>Upload an image</strong></li>
                        <li>Select your downloaded user avatar (PNG format recommended)</li>
                        <li>Adjust the image using the crop tool if necessary</li>
                        <li>Click <strong>Save</strong> to update your profile picture</li>
                      </ol>
                      <div className="mt-4 space-y-2">
                        <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                          <p className="text-sm text-green-800 dark:text-green-200">
                            <strong>Admin Note:</strong> Administrators can update user avatars by going to 
                            Settings → User management → Users, then editing individual user profiles.
                          </p>
                        </div>
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">
                            <strong>Size Requirements:</strong> User avatars should be square images, ideally 256x256 pixels or larger.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">
                      Confluence Space Icons
                    </h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <p>Brand your Confluence spaces with custom icons for better visual organisation.</p>
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>Go to your Confluence space</li>
                        <li>
                          Click <strong>Space settings</strong> in the bottom left sidebar
                        </li>
                        <li>
                          Select <strong>Space details</strong> under the Settings section
                        </li>
                        <li>Click the current space avatar/icon</li>
                        <li>Choose <strong>Upload an image</strong> and select your project icon</li>
                        <li>
                          Adjust the image using the crop tool if necessary
                        </li>
                        <li>Click <strong>Save</strong> to apply the new space icon</li>
                      </ol>
                    </div>
                  </section>
                </div>
              </TabsContent>

              {/* Data Center Instructions */}
              <TabsContent value="dc" className="space-y-8">
                <div className="space-y-4">
                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Work Type Icons (Issue Types)</h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <p>Configure custom icons for issue types to enhance visual workflow management.</p>
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
                          <strong>Upload your downloaded icon</strong> (PNG recommended, max 1MB)
                        </li>
                        <li>
                          <strong>Save</strong> your changes
                        </li>
                      </ol>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">
                      Project Icons
                    </h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <p>Set distinctive project avatars for better project identification and branding.</p>
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>Navigate to your Jira project</li>
                        <li>Click the <strong>Project settings</strong> gear icon</li>
                        <li>Look for <strong>Avatar</strong> in the left sidebar or project details section</li>
                        <li>Click <strong>Choose File</strong> or <strong>Browse</strong> under "Upload new avatar"</li>
                        <li>Select your downloaded project icon file</li>
                        <li>
                          Use the cropping tool to adjust the image positioning if needed
                        </li>
                        <li>Click <strong>Save</strong> to apply the new project icon</li>
                      </ol>
                      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          <strong>Note:</strong> The exact location of avatar settings may vary depending on your Data Centre version.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">
                      User Avatars
                    </h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <p>Update user profile pictures for better team member recognition and professional appearance.</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Method 1: Self-Service (User Profile)</h4>
                          <ol className="ml-6 space-y-2 list-decimal">
                            <li>Click on your <strong>profile picture</strong> or name in the top-right corner</li>
                            <li>Select <strong>Profile</strong> or <strong>View Profile</strong></li>
                            <li>Look for an <strong>Edit</strong> or <strong>Update Avatar</strong> option</li>
                            <li>Upload your downloaded user avatar (PNG format recommended)</li>
                            <li>Crop the image if necessary and <strong>Save</strong></li>
                          </ol>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Method 2: Administrator Management</h4>
                          <ol className="ml-6 space-y-2 list-decimal">
                            <li>Go to <strong>Administration</strong> → <strong>User management</strong></li>
                            <li>Click on <strong>Users</strong></li>
                            <li>Find and click on the user you want to update</li>
                            <li>Look for <strong>Edit</strong> or avatar update options</li>
                            <li>Upload the new user avatar and save changes</li>
                          </ol>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                          <p className="text-sm text-amber-800 dark:text-amber-200">
                            <strong>Version Note:</strong> Avatar management interfaces may differ between Data Centre versions. 
                            Consult your Jira administrator if you can't locate these options.
                          </p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                          <p className="text-sm text-green-800 dark:text-green-200">
                            <strong>Bulk Management:</strong> For multiple users, consider using Jira's user import/export functionality 
                            or third-party user management tools.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-xl font-semibold">
                      Confluence Space Icons
                    </h2>
                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                      <p>Customise Confluence space logos for improved visual organisation and branding.</p>
                      <ol className="ml-6 space-y-3 list-decimal">
                        <li>Access your Confluence space</li>
                        <li>Click <strong>Space tools</strong> or <strong>Space settings</strong> in the left sidebar</li>
                        <li>Select <strong>Overview</strong> or <strong>Look and Feel</strong> from the menu</li>
                        <li>Look for <strong>Space Logo</strong>, <strong>Space Avatar</strong>, or <strong>Edit Space Details</strong></li>
                        <li>Click <strong>Browse</strong> or <strong>Choose File</strong> to upload your new project icon</li>
                        <li>Adjust using the crop tool if necessary</li>
                        <li>Click <strong>Save</strong> or <strong>Update</strong> to apply the new space icon</li>
                      </ol>
                      <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                        <p className="text-sm text-purple-800 dark:text-purple-200">
                          <strong>Tip:</strong> Space icons help users quickly identify and navigate between different team spaces 
                          and project documentation areas.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">
              📋 File Format & Size Recommendations
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Work Type Icons</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Format:</strong> PNG or SVG</li>
                    <li>• <strong>Size:</strong> 16x16 to 32x32 pixels</li>
                    <li>• <strong>File size:</strong> Under 1MB</li>
                    <li>• <strong>Best use:</strong> Simple, recognisable symbols</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Project Icons</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Format:</strong> PNG or SVG</li>
                    <li>• <strong>Size:</strong> 64x64 to 128x128 pixels</li>
                    <li>• <strong>File size:</strong> Under 2MB</li>
                    <li>• <strong>Best use:</strong> Logos, team symbols</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">User Avatars</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Format:</strong> PNG (recommended)</li>
                    <li>• <strong>Size:</strong> 256x256 pixels or larger</li>
                    <li>• <strong>Aspect ratio:</strong> Square (1:1)</li>
                    <li>• <strong>Best use:</strong> Professional headshots</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>General Tips:</strong> PNG files are ready to use immediately and work well for most cases. 
                    SVG files offer better scalability and can be customised before upload.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">🔧 Troubleshooting</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Icon not displaying correctly?</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Ensure your icon file meets the size requirements above</li>
                    <li>• Try using PNG format if SVG isn't working</li>
                    <li>• Clear your browser cache and refresh Jira/Confluence</li>
                    <li>• Check that the image isn't corrupted by opening it locally first</li>
                    <li>• For user avatars, ensure the image is square (equal width and height)</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Don't have admin access?</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Contact your Jira/Confluence administrator for assistance</li>
                    <li>• Share the downloaded icon file and this guide with them</li>
                    <li>• For user avatars, you may be able to update your own profile</li>
                    <li>• Some organisations have self-service options enabled</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Need a different colour or style?</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Download the SVG version and modify it using design software</li>
                    <li>• Browse our other colour schemes available for work type and project icons</li>
                    <li>• Use online SVG editors if you don't have design software</li>
                    <li>• Consider requesting custom icons from your design team</li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Upload issues in Data Centre?</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Interface locations may vary between Data Centre versions</li>
                    <li>• Check with your administrator for version-specific instructions</li>
                    <li>• Some features may require specific add-ons or configurations</li>
                    <li>• Bulk user avatar updates may require API calls or third-party tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">💬 Need Help?</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">🏢 For Organisations</h4>
                  <p className="text-sm mb-3">
                    Need help implementing these icons across your Jira or Confluence instance? 
                    Want to create custom branded icons for your organisation?
                  </p>
                  <a
                    href="https://www.quirk.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Contact Quirk Consulting →
                  </a>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">🛠️ Technical Support</h4>
                  <p className="text-sm mb-3">
                    Experiencing technical issues with icon uploads or need assistance with 
                    specific Jira/Confluence configurations?
                  </p>
                  <div className="space-y-1 text-sm">
                    <div>• Check your Atlassian documentation</div>
                    <div>• Contact your system administrator</div>
                    <div>• Reach out to Atlassian support</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">🚀 About This Icon Library</h4>
                <p className="text-sm">
                  This comprehensive icon library is maintained by Quirk, Australia's modern work management 
                  and enterprise tooling specialists. We help organisations turn chaos into clarity through 
                  better tooling and visual systems. If you can see it, you can solve it.
                </p>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

export default InstallationGuide;
