import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const License = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto">
      <Card className="transition-all duration-300 shadow-lg bg-background hover:shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold">
            Licence Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Quirk Repository License */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Quirk Jira Icons Repository Licence
            </h2>
            <div className="p-4 border rounded-lg bg-muted">
              <h3 className="mb-2 font-semibold text-foreground">MIT Licence</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Copyright (c) 2025 Quirk (www.quirk.com.au)
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Permission is hereby granted, free of charge, to any person
                  obtaining a copy of this software and associated documentation
                  files (the "Software"), to deal in the Software without
                  restriction, including without limitation the rights to use,
                  copy, modify, merge, publish, distribute, sublicence, and/or
                  sell copies of the Software, and to permit persons to whom the
                  Software is furnished to do so, subject to the following
                  conditions:
                </p>
                <p>
                  The above copyright notice and this permission notice shall be
                  included in all copies or substantial portions of the Software.
                </p>
                <p className="font-medium">
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                  OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                  OTHER DEALINGS IN THE SOFTWARE.
                </p>
              </div>
            </div>
          </section>

          {/* Collection Overview */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Collection Overview</h2>
            <div className="p-4 border rounded-lg bg-muted">
              <div className="grid gap-4 mb-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1,000+</div>
                  <div className="text-sm text-muted-foreground">Work Type Icons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">180+</div>
                  <div className="text-sm text-muted-foreground">Project Icons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">300</div>
                  <div className="text-sm text-muted-foreground">User Avatars</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our comprehensive icon library includes 300 unique user avatar icons across 15 styles: 
                40 Adventurer-style avatars (20 standard and 20 gender-neutral variants), 
                40 Avataaars-style avatars (20 standard and 20 gender-neutral variants), 
                40 Big Ears-style avatars (20 standard and 20 gender-neutral variants), 
                20 Big Smile-style avatars, 40 Bottts-style robot avatars (20 standard and 
                20 gender-neutral variants), 20 Croodles Neutral-style doodle avatars, 
                20 Fun Emoji-style avatars, 20 Lorelei Neutral-style avatars, 40 Pixel Art-style avatars 
                (20 standard and 20 gender-neutral variants), and 20 Thumbs-style avatars. All icons are 
                optimised for Jira user profiles, project identification, and modern work management platforms 
                whilst maintaining proper attribution requirements.
              </p>
            </div>
          </section>

          {/* Third-Party Licenses */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Third-Party Licences</h2>
            
            {/* Lisa Wischofsky Creations (CC BY 4.0) */}
            <LicenceCard
              title="Lisa Wischofsky Creations"
              licence="CC BY 4.0"
              author="Lisa Wischofsky"
              authorUrl="https://www.instagram.com/lischi_art/"
              licenceUrl="https://creativecommons.org/licenses/by/4.0/"
              styles={[
                {
                  name: "Adventurer & Adventurer Neutral Avatars",
                  description: "40 diverse adventurer-style avatars (20 standard and 20 gender-neutral variants) perfect for professional team identification.",
                  sourceUrl: "https://www.figma.com/community/file/1184595184137881796",
                  sourceTitle: "Adventurer"
                },
                {
                  name: "Lorelei Neutral Avatars",
                  description: "20 gender-neutral elegant avatars with sophisticated and modern aesthetics for diverse workplace settings.",
                  sourceUrl: "https://www.figma.com/community/file/1198749693280469639",
                  sourceTitle: "Lorelei Neutral",
                  licenceOverride: {
                    name: "CC0 1.0",
                    url: "https://creativecommons.org/publicdomain/zero/1.0/"
                  }
                }
              ]}
            />

            {/* Pablo Stanley Creations */}
            <LicenceCard
              title="Pablo Stanley Creations"
              licence="Free for personal and commercial use"
              author="Pablo Stanley"
              authorUrl="https://twitter.com/pablostanley"
              styles={[
                {
                  name: "Avataaars & Avataaars Neutral Avatars",
                  description: "40 modern flat-design avatars with clean, contemporary Sketch App-inspired styling (20 standard and 20 gender-neutral variants).",
                  sourceUrl: "https://avataaars.com/",
                  sourceTitle: "Avataaars"
                },
                {
                  name: "Bottts & Bottts Neutral Avatars",
                  description: "40 unique robot-style avatars with modern, tech-inspired aesthetics (20 standard and 20 gender-neutral variants).",
                  sourceUrl: "https://bottts.com/",
                  sourceTitle: "Bottts"
                }
              ]}
            />

            {/* The Visual Team Creations (CC BY 4.0) */}
            <LicenceCard
              title="The Visual Team Creations"
              licence="CC BY 4.0"
              author="The Visual Team"
              authorUrl="https://thevisual.team/"
              licenceUrl="https://creativecommons.org/licenses/by/4.0/"
              styles={[
                {
                  name: "Big Ears & Big Ears Neutral Avatars",
                  description: "40 avatars featuring playful character designs with distinctive large ears and expressive facial features (20 standard and 20 gender-neutral variants).",
                  sourceUrl: "https://www.figma.com/community/file/986078800058673824",
                  sourceTitle: "Face Generator"
                }
              ]}
            />

            {/* Ashley Seo Creations (CC BY 4.0) */}
            <LicenceCard
              title="Ashley Seo Creations"
              licence="CC BY 4.0"
              author="Ashley Seo"
              authorUrl="http://www.ashleyseo.com/"
              licenceUrl="https://creativecommons.org/licenses/by/4.0/"
              styles={[
                {
                  name: "Big Smile Avatars",
                  description: "20 cheerful character designs with prominent smiles and positive expressions that bring joy to Jira user profiles.",
                  sourceUrl: "https://www.figma.com/community/file/881358461963645496",
                  sourceTitle: "Custom Avatar"
                }
              ]}
            />

            {/* Vijay Verma Creations (CC BY 4.0) */}
            <LicenceCard
              title="Vijay Verma Creations"
              licence="CC BY 4.0"
              author="vijay verma"
              authorUrl="https://vjy.me/"
              licenceUrl="https://creativecommons.org/licenses/by/4.0/"
              styles={[
                {
                  name: "Croodles Neutral Avatars",
                  description: "20 gender-neutral doodle-style designs with hand-drawn, sketch-like aesthetics that bring a personal, human touch to user profiles.",
                  sourceUrl: "https://www.figma.com/community/file/966199982810283152",
                  sourceTitle: "Croodles - Doodle your face"
                }
              ]}
            />

            {/* Vijay Verma Creations (Coolshapes) (MIT) */}
            <LicenceCard
              title="Vijay Verma Creations (Coolshapes)"
              licence="MIT"
              author="@realvjy"
              authorUrl="https://x.com/realvjy"
              licenceUrl="https://opensource.org/licenses/MIT"
              styles={[
                {
                  name: "Coolshapes Collection",
                  description: "A simple, fun project for the sake of creating some cool-looking abstract shapes with little grainy gradients. Coolshapes is a completely open-source set of 100+ abstract shapes crafted for any design and development projects. Free for both commercial and personal use.",
                  isDirectCreation: true
                }
              ]}
            />

            {/* Davis Uche Creations (CC BY 4.0) */}
            <LicenceCard
              title="Davis Uche Creations"
              licence="CC BY 4.0"
              author="Davis Uche"
              authorUrl="https://www.instagram.com/davedirect3/"
              licenceUrl="https://creativecommons.org/licenses/by/4.0/"
              styles={[
                {
                  name: "Fun Emoji Avatars",
                  description: "20 expressive emoji-style designs with vibrant, fun expressions and emotions that bring energy and personality to user profiles.",
                  sourceUrl: "https://www.figma.com/community/file/968125295144990435",
                  sourceTitle: "Fun Emoji Set"
                }
              ]}
            />

            {/* DiceBear Creations (CC0 1.0) */}
            <LicenceCard
              title="DiceBear Creations"
              licence="CC0 1.0"
              author="DiceBear"
              authorUrl="https://www.dicebear.com"
              licenceUrl="https://creativecommons.org/publicdomain/zero/1.0/"
              styles={[
                {
                  name: "Pixel Art & Pixel Art Neutral Avatars",
                  description: "40 retro-style designs with nostalgic 8-bit gaming aesthetics (20 standard and 20 gender-neutral variants).",
                  isDirectCreation: true
                },
                {
                  name: "Thumbs Avatars",
                  description: "20 distinctive hand and thumb-based designs with unique visual aesthetics for memorable team identification.",
                  isDirectCreation: true
                },
                {
                  name: "Project Icons (Shapes, Glass, Identicon)",
                  description: "Abstract shapes, modern translucent glass designs, and symmetric pixel patterns for unique project identification.",
                  isDirectCreation: true
                }
              ]}
            />

            {/* Lucide License */}
            <div className="p-4 border rounded-lg bg-muted">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Lucide Icons</h3>
              <p className="mb-3 text-sm text-muted-foreground">ISC Licence</p>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Copyright (c) for portions of Lucide are held by Cole Bemis
                  2013-2022 as part of Feather (MIT). All other copyright (c)
                  for Lucide are held by Lucide Contributors 2022.
                </p>
                <p>
                  Permission to use, copy, modify, and/or distribute this
                  software for any purpose with or without fee is hereby
                  granted, provided that the above copyright notice and this
                  permission notice appear in all copies.
                </p>
                <p className="font-medium">
                  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES 
                  WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY 
                  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, 
                  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM 
                  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE 
                  OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR 
                  PERFORMANCE OF THIS SOFTWARE.
                </p>
              </div>
            </div>

          </section>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper component for licence cards
interface StyleInfo {
  name: string;
  description: string;
  sourceUrl?: string;
  sourceTitle?: string;
  isDirectCreation?: boolean;
  licenceOverride?: {
    name: string;
    url: string;
  };
}

interface LicenceCardProps {
  title: string;
  licence: string;
  author: string;
  authorUrl: string;
  licenceUrl?: string;
  styles: StyleInfo[];
}

const LicenceCard = ({ 
  title, 
  licence, 
  author, 
  authorUrl, 
  licenceUrl, 
  styles 
}: LicenceCardProps) => (
  <div className="p-4 border rounded-lg bg-muted">
    <h3 className="mb-3 text-lg font-semibold text-foreground">{title}</h3>
    <p className="mb-3 text-sm text-muted-foreground">
      Licenced under{" "}
      {licenceUrl ? (
        <a href={licenceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          {licence}
        </a>
      ) : (
        licence
      )}
    </p>
    
    <div className="space-y-4">
      {styles.map((style, index) => (
        <div key={index}>
          <h4 className="mb-1 font-medium text-foreground">{style.name}</h4>
          <p className="text-sm text-muted-foreground">
            {style.isDirectCreation ? (
              <>
                Created by{" "}
                <a href={authorUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {author}
                </a>
                {style.licenceOverride ? (
                  <>
                    , licenced under{" "}
                    <a href={style.licenceOverride.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {style.licenceOverride.name}
                    </a>
                  </>
                ) : licenceUrl && (
                  <>
                    , licenced under{" "}
                    <a href={licenceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {licence}
                    </a>
                  </>
                )}
                .
              </>
            ) : (
              <>
                Remix of{" "}
                {style.sourceUrl ? (
                  <a href={style.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {style.sourceTitle}
                  </a>
                ) : (
                  style.sourceTitle
                )}{" "}
                by{" "}
                <a href={authorUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {author}
                </a>
                {style.licenceOverride ? (
                  <>
                    , licenced under{" "}
                    <a href={style.licenceOverride.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {style.licenceOverride.name}
                    </a>
                  </>
                ) : licenceUrl && (
                  <>
                    , licenced under{" "}
                    <a href={licenceUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {licence}
                    </a>
                  </>
                )}
                .
              </>
            )}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {style.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default License;
