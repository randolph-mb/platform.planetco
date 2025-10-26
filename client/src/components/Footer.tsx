import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "PlanetCo Studio", href: "/product/studio" },
        { label: "PlanetCo Console", href: "/product/console" },
        { label: "PlanetCo Insights", href: "/product/insights" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground" data-testid={`text-footer-${section.title.toLowerCase()}`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">PC</span>
            </div>
            <span className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {currentYear} PlanetCo. All rights reserved.
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            Built with precision and care
          </div>
        </div>
      </div>
    </footer>
  );
}
