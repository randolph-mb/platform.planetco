import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "agent-builder",
    name: "Agent Builder",
    tagline: "Build intelligent AI agents with ease",
    overview: "Create, train, and deploy custom AI agents for your specific use cases. Our no-code platform makes it simple to build powerful automation workflows powered by large language models.",
    thumbnail: "@assets/generated_images/AI_workflow_builder_interface_e46bf36c.png",
    category: "Build",
    status: "live",
    pill: "Live",
    url: "https://example.com/agent-builder",
    capabilities: [
      "Visual workflow designer",
      "Pre-built agent templates",
      "Custom training data support",
      "Real-time testing environment",
      "API integration framework",
      "Multi-model support"
    ]
  },
  {
    id: "deployment-manager",
    name: "Deployment Manager",
    tagline: "Deploy AI models with confidence",
    overview: "Streamline your ML model deployment process with automated CI/CD pipelines, version control, and rollback capabilities. Monitor performance and scale effortlessly across multiple environments.",
    thumbnail: "@assets/generated_images/AI_control_console_dashboard_d4b9c839.png",
    category: "Ops",
    status: "live",
    pill: "Live",
    capabilities: [
      "One-click deployments",
      "Automatic scaling",
      "Version control integration",
      "Rollback protection",
      "Multi-environment support",
      "Performance monitoring"
    ]
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    tagline: "Gain insights into AI performance",
    overview: "Track and analyze your AI systems with comprehensive metrics, custom dashboards, and real-time monitoring. Make data-driven decisions to optimize your AI workflows.",
    thumbnail: "@assets/generated_images/Analytics_insights_dashboard_interface_c3f42e18.png",
    category: "Analytics",
    status: "live",
    pill: "Live",
    capabilities: [
      "Real-time metrics",
      "Custom dashboard creation",
      "Anomaly detection",
      "Cost tracking",
      "Usage analytics",
      "Performance benchmarking"
    ]
  },
  {
    id: "prompt-studio",
    name: "Prompt Studio",
    tagline: "Craft and test prompts efficiently",
    overview: "Design, test, and optimize your AI prompts in a collaborative environment. Version control for prompts, A/B testing capabilities, and performance analytics all in one place.",
    thumbnail: "@assets/generated_images/AI_workflow_builder_interface_e46bf36c.png",
    category: "Build",
    status: "private_beta",
    pill: "Private Beta",
    capabilities: [
      "Prompt versioning",
      "A/B testing framework",
      "Collaborative editing",
      "Performance metrics",
      "Template library",
      "Multi-model testing"
    ]
  },
  {
    id: "model-optimizer",
    name: "Model Optimizer",
    tagline: "Optimize AI models for production",
    overview: "Reduce inference costs and improve response times with our automated model optimization tools. Fine-tune, quantize, and compress models without sacrificing quality.",
    thumbnail: "@assets/generated_images/AI_control_console_dashboard_d4b9c839.png",
    category: "Ops",
    status: "alpha",
    pill: "Alpha",
    capabilities: [
      "Automated quantization",
      "Fine-tuning pipeline",
      "Compression algorithms",
      "Benchmark suite",
      "Cost estimation",
      "Quality assurance"
    ]
  },
  {
    id: "workflow-designer",
    name: "Workflow Designer",
    tagline: "Design complex AI workflows visually",
    overview: "Build sophisticated AI-powered workflows with our drag-and-drop interface. Connect multiple models, add conditional logic, and create powerful automation pipelines.",
    thumbnail: "@assets/generated_images/AI_workflow_builder_interface_e46bf36c.png",
    category: "Build",
    status: "live",
    pill: "Live",
    url: "https://example.com/workflow-designer",
    capabilities: [
      "Visual workflow editor",
      "Conditional logic support",
      "Multi-model orchestration",
      "Error handling",
      "Template marketplace",
      "Real-time preview"
    ]
  }
];
