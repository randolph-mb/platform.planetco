import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Datenschutz() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8" data-testid="text-page-title">
            Datenschutzerklärung
          </h1>
          
          <Card>
            <CardContent className="pt-6 prose prose-sm max-w-none dark:prose-invert">
              <section className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">1. Datenschutz auf einen Blick</h2>
                  <h3 className="text-lg font-medium mb-2 mt-4">Allgemeine Hinweise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">2. Datenerfassung auf dieser Website</h2>
                  <h3 className="text-lg font-medium mb-2 mt-4">Wer ist verantwortlich für die Datenerfassung?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>

                  <h3 className="text-lg font-medium mb-2 mt-4">Wie erfassen wir Ihre Daten?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">3. Hosting</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir hosten die Inhalte unserer Website bei Replit. Die Server befinden sich in den USA. Beim Besuch dieser Website erfasst Replit verschiedene Logfiles inklusive Ihrer IP-Adressen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">4. Ihre Rechte</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Diese Website verwendet derzeit keine Cookies für Tracking oder Analytics. Sollten in Zukunft Cookies eingesetzt werden, werden Sie entsprechend informiert und um Ihre Einwilligung gebeten.
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground italic">
                    Hinweis: Dies ist eine Platzhalterseite. Die vollständige Datenschutzerklärung wird bei der Veröffentlichung ergänzt.
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
