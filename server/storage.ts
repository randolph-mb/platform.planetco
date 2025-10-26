import { type Product } from "@shared/schema";

export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;

  constructor() {
    this.products = new Map();
    this.initializeProducts();
  }

  private initializeProducts() {
    const initialProducts: Product[] = [
      {
        id: "studio",
        name: "PlanetCo Studio",
        tagline: "Visual builder for AI workflows.",
        status: "alpha",
        category: "Build",
        url: "",
        learn: "/product/studio",
        thumbnail: "/assets/generated_images/AI_workflow_builder_interface_e46bf36c.png",
        pill: "Alpha",
        overview: "Visual builder for AI workflows, from prototype to production.",
        capabilities: [
          "Drag-and-drop pipelines",
          "Secrets & keys vault",
          "One-click deploy"
        ]
      },
      {
        id: "console",
        name: "PlanetCo Console",
        tagline: "Unified control of your AI stack.",
        status: "private_beta",
        category: "Ops",
        url: "",
        learn: "/product/console",
        thumbnail: "/assets/generated_images/AI_control_console_dashboard_d4b9c839.png",
        pill: "Private Beta",
        overview: "Centralized monitoring, config, and rollout management.",
        capabilities: [
          "Env configs",
          "Zero-downtime rollouts",
          "Role-based access"
        ]
      },
      {
        id: "insights",
        name: "PlanetCo Insights",
        tagline: "Real-time metrics & alerts.",
        status: "live",
        category: "Analytics",
        url: "https://insights.planetco.ai",
        learn: "/product/insights",
        thumbnail: "/assets/generated_images/Analytics_insights_dashboard_interface_c3f42e18.png",
        pill: "Live",
        overview: "Observability for AI workflows and agents.",
        capabilities: [
          "Latency breakdowns",
          "Error tracing",
          "Alert routing"
        ]
      }
    ];

    initialProducts.forEach(product => {
      this.products.set(product.id, product);
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }
}

export const storage = new MemStorage();
