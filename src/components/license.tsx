import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const License = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto">
      <Card className="transition-all duration-300 shadow-lg bg-background hover:shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold">
            License Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                Quirk Jira Icons Repository License
              </h2>
              <p className="leading-relaxed animate-fade-in text-muted-foreground">
                MIT License
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Copyright (c) 2025 Quirk (www.quirk.com.au)
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software, and to permit persons to whom the
                Software is furnished to do so, subject to the following
                conditions:
              </p>
              <p className="leading-relaxed text-muted-foreground">
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </section>

            <div className="p-4 mt-8 border rounded-lg bg-muted">
              <h2 className="mb-4 text-xl font-semibold">
                Third-Party Licenses
              </h2>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Lucide License</h3>
                <p className="leading-relaxed text-muted-foreground">
                  ISC License
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Copyright (c) for portions of Lucide are held by Cole Bemis
                  2013-2022 as part of Feather (MIT). All other copyright (c)
                  for Lucide are held by Lucide Contributors 2022.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Permission to use, copy, modify, and/or distribute this
                  software for any purpose with or without fee is hereby
                  granted, provided that the above copyright notice and this
                  permission notice appear in all copies.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL
                  WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
                  WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL
                  THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR
                  CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF
                  CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
                  OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default License;
