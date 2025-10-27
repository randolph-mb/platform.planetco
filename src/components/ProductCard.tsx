import { Link } from "wouter";
import { type Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
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

  return (
    <Link href={`/product/${product.id}`} data-testid={`link-product-${product.id}`}>
      <Card className="group relative overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 h-full flex flex-col cursor-pointer">
        <div className="absolute top-4 right-4 z-10">
          <Badge
            variant="secondary"
            className={`uppercase tracking-wide text-xs font-semibold ${getStatusVariant(product.status)}`}
            data-testid={`badge-status-${product.id}`}
          >
            {product.pill}
          </Badge>
        </div>
        
        <div className="relative aspect-video overflow-hidden rounded-t-2xl bg-muted">
          <img
            src={product.thumbnail}
            alt={`${product.name} interface preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-testid={`img-thumbnail-${product.id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardHeader className="space-y-2 pb-3">
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${getCategoryColor(product.category)}`} />
            <span className={`text-xs font-medium uppercase tracking-wider ${getCategoryColor(product.category)}`} data-testid={`text-category-${product.id}`}>
              {product.category}
            </span>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight" data-testid={`text-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-base text-muted-foreground" data-testid={`text-tagline-${product.id}`}>
            {product.tagline}
          </p>
        </CardHeader>

        <CardContent className="flex-1 pb-4">
          <p className="text-sm text-foreground/80 leading-relaxed" data-testid={`text-overview-${product.id}`}>
            {product.overview}
          </p>
        </CardContent>

        <CardFooter className="pt-4 border-t">
          <div className="flex items-center justify-between w-full gap-2">
            <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors" data-testid={`link-learn-${product.id}`}>
              Learn more
            </span>
            <ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
