import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8" data-testid="text-page-title">
            Impressum
          </h1>
          
          <Card>
            <CardContent className="pt-6 prose prose-sm max-w-none dark:prose-invert">
              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    PlanetCo GmbH<br />
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Deutschland
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Telefon: +49 (0) 123 456789<br />
                    E-Mail: info@planetco.ai
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Registereintrag</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Eintragung im Handelsregister<br />
                    Registergericht: Amtsgericht Musterstadt<br />
                    Registernummer: HRB 12345
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                    DE123456789
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Max Mustermann<br />
                    Geschäftsführer
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground italic">
                    Hinweis: Dies ist eine Platzhalterseite. Die tatsächlichen Angaben werden bei der Veröffentlichung ergänzt.
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
