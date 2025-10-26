import { useQuery } from "@tanstack/react-query";
import { type Product } from "@shared/schema";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const categories = ["Build", "Ops", "Analytics"];

  const filteredProducts = products?.filter(
    (product) => !selectedCategory || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Platform Tools</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70" data-testid="text-hero-title">
              AI-Powered Tools for
              <br />
              Modern Development
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed" data-testid="text-hero-subtitle">
              Build, deploy, and monitor AI workflows with our integrated suite of developer tools designed for speed and reliability.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              <Badge
                variant={selectedCategory === null ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm hover-elevate active-elevate-2"
                onClick={() => setSelectedCategory(null)}
                data-testid="button-filter-all"
              >
                All Products
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm hover-elevate active-elevate-2"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-filter-${category.toLowerCase()}`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {isLoading ? (
              <div className="flex items-center justify-center py-32" data-testid="loader-products">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : filteredProducts && filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-products">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32">
                <p className="text-lg text-muted-foreground" data-testid="text-no-products">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
