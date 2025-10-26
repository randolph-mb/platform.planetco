import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { type Product } from "@shared/schema";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, ExternalLink, Loader2 } from "lucide-react";
import { ProductModal } from "@/components/ProductModal";
import { useState } from "react";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const productId = params?.id;
  const [modalOpen, setModalOpen] = useState(false);

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const product = products?.find((p) => p.id === productId);

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "alpha":
        return "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20";
      case "private_beta":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20";
      case "live":
        return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20";
      default:
        return "";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Build":
        return "text-blue-600 dark:text-blue-400";
      case "Ops":
        return "text-purple-600 dark:text-purple-400";
      case "Analytics":
        return "text-emerald-600 dark:text-emerald-400";
      default:
        return "text-muted-foreground";
    }
  };

  const handleUseProduct = () => {
    if (!product) return;
    
    if (product.url) {
      window.open(product.url, "_blank", "noopener,noreferrer");
    } else {
      setModalOpen(true);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" data-testid="loader-product" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4" data-testid="text-not-found">Product not found</h1>
            <Button data-testid="button-back-home" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent">
          <img
            src={product.thumbnail}
            alt={`${product.name} banner`}
            className="w-full h-full object-cover opacity-20"
            data-testid="img-hero-banner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-32 relative z-10 pb-20">
          <div className="mb-8">
            <Button variant="ghost" size="sm" className="mb-6" data-testid="button-back" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-1.5 h-1.5 rounded-full ${getCategoryColor(product.category)}`} />
                  <span className={`text-sm font-medium uppercase tracking-wider ${getCategoryColor(product.category)}`} data-testid="text-category">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-testid="text-product-name">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-6" data-testid="text-tagline">
                  {product.tagline}
                </p>
                <Badge
                  variant="secondary"
                  className={`uppercase tracking-wide text-xs font-semibold ${getStatusVariant(product.status)}`}
                  data-testid="badge-status"
                >
                  {product.pill}
                </Badge>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-foreground/90 leading-relaxed" data-testid="text-overview">
                    {product.overview}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Key Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.capabilities.map((capability, index) => (
                      <div key={index} className="flex items-start gap-3" data-testid={`item-capability-${index}`}>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{capability}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="pt-6 space-y-4">
                  <Button
                    size="lg"
                    className="w-full text-base font-semibold"
                    onClick={handleUseProduct}
                    data-testid="button-use-product"
                  >
                    Use Product
                    {product.url && <ExternalLink className="w-4 h-4 ml-2" />}
                  </Button>
                  
                  <div className="pt-4 border-t space-y-3">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Status</p>
                      <p className="text-sm font-medium" data-testid="text-status-sidebar">{product.pill}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Category</p>
                      <p className="text-sm font-medium" data-testid="text-category-sidebar">{product.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ProductModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={product.name}
      />
    </div>
  );
}
