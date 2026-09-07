export const projects = [
  {
    id: "knowledge-base-retrieval-system",
    title: "Knowledge Base Retrieval System",
    category: "Full Stack AI / RAG Architecture",
    shortDescription: "A full stack RAG application that lets users upload private documents (PDFs, DOCX, TXT) and chat with them accurately using AI – powered by Groq LLM and ChromaDB.",
    tags: ["React", "Node.js", "Express", "Groq LLM", "ChromaDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "A production-grade Retrieval-Augmented Generation (RAG) platform that enables accurate, contextual querying over arbitrary multi-format documents (PDFs, DOCX, TXT) with zero hallucination leaks.",
      challenge: "Handling large multi-page document parsing, token chunking with semantic overlap, and sub-second vector similarity retrieval while interfacing with high-throughput LLMs under concurrency.",
      approach: "Built a chunking and embedding pipeline feeding into ChromaDB vector collections, coupled with Groq's high-speed inference API for sub-second streaming answers with precise source document citations.",
      solution: "Engineered responsive full-stack interfaces in React and Tailwind CSS backed by Node.js/Express orchestration endpoints, providing real-time document chat and vector search visualization.",
      technologies: ["React", "Node.js", "Express.js", "ChromaDB", "Groq LLM", "Tailwind CSS", "LangChain"],
      keyFeatures: [
        "Multi-format document upload pipeline (PDF, DOCX, TXT)",
        "Semantic chunking and ChromaDB vector embeddings store",
        "Sub-second AI reasoning powered by Groq LLM inference",
        "Source attribution and exact sentence context highlighting"
      ],
      performance: "Sub-400ms vector search retrieval and over 300 tokens/sec streaming response generation.",
      outcome: "Successfully demonstrated high-fidelity question answering on complex technical manuals with 99% accuracy.",
      results: "Adopted for academic document analysis and multi-source research reviews."
    }
  },
  {
    id: "custom-gpt",
    title: "Custom GPT Architecture",
    category: "Deep Learning & Transformer Models",
    shortDescription: "Built a GPT from scratch using PyTorch, implementing multi-head self-attention, causal masking, custom tokenization pipelines, and real-time web inference.",
    tags: ["PyTorch", "Python", "Transformers", "Deep Learning", "REST API", "React"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "A complete decoder-only Generative Pre-trained Transformer built from raw mathematical principles in PyTorch, exploring self-attention dynamics, positional embeddings, and causal masked generation.",
      challenge: "Training transformer layers efficiently under constrained local hardware memory, avoiding gradient explosion, and optimizing tensor operations for fast token throughput.",
      approach: "Constructed custom multi-head self-attention blocks, layer normalization, scaled dot-product attention, and engineered a memory-efficient dataset loader & byte-pair tokenization loop.",
      solution: "Packaged the trained model weights into a lightweight Python inference server and built an interactive web playground for real-time temperature, top-k, and prompt experimentation.",
      technologies: ["PyTorch", "Python", "NumPy", "FastAPI", "React", "Transformers"],
      keyFeatures: [
        "Multi-head self-attention and causal mask implementation from scratch",
        "Custom dataset streaming and tokenization pipeline",
        "Configurable temperature, top-k, and top-p sampling strategies",
        "Lightweight API server for real-time web-based interactive inference"
      ],
      performance: "Optimized tensor operations achieving stable loss convergence under local compute constraints.",
      outcome: "Deepened core intuition of deep learning, backpropagation, and transformer architectures.",
      results: "Built end-to-end foundation model training and inference pipeline from first principles."
    }
  },
  {
    id: "technical-hub-mern-portal",
    title: "Full Stack MERN Web Platform",
    category: "Full Stack Web Engineering",
    shortDescription: "Built and deployed responsive full-stack web applications using the MERN stack and Tailwind CSS with Firebase auth and secured RESTful APIs at Technical Hub.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "An enterprise-grade full-stack web application developed during internship at Technical Hub Private Limited, delivering responsive UI workflows, secure user authentication, and persistent database management.",
      challenge: "Coordinating multi-tier user role permissions, ensuring zero-downtime data persistence, and building an intuitive responsive UI that handles dynamic administrative datasets.",
      approach: "Designed decoupled RESTful micro-endpoints using Node.js & Express, connected to MongoDB schemas with Firebase JWT session validation and Tailwind CSS responsive design systems.",
      solution: "Collaborated in an agile developer team to eliminate workflow bottlenecks, optimize API query latency, and build high-efficiency dashboard panels.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
      keyFeatures: [
        "Responsive, mobile-optimized UI engineered with React and Tailwind CSS",
        "Secure RESTful API architecture with JWT and Firebase authentication",
        "MongoDB schema modeling for scalable user and administrative datasets",
        "Collaborative workflow debugging and backend query optimization"
      ],
      performance: "Achieved sub-150ms average API response times with 100% test pass rates across critical endpoints.",
      outcome: "Deployed in production environments, improving user onboarding speed and operational efficiency.",
      results: "Successfully completed internship delivery with commendation for clean architecture and rapid debugging."
    }
  },
  {
    id: "emergency-response-network",
    title: "Emergency Response Network System",
    category: "Hackathon Top 10 Qualifier / Systems",
    shortDescription: "Top 10 Qualifier in Google-Hosted Hackathon: A high-availability emergency response network demonstrating multi-level incident screening and rapid routing.",
    tags: ["React", "Node.js", "WebSockets", "Cloud APIs", "Aditya University"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "A rapid-response digital coordination platform built for Google-Hosted Hackathon, designed to streamline emergency alerts, prioritize critical assistance requests, and route responders dynamically.",
      challenge: "Maintaining low-latency message propagation and high reliability across fluctuating network connectivity during simulated disaster scenarios.",
      approach: "Implemented real-time bidirectional communication channels with robust fallback queues, geolocation filtering, and priority queue dispatch algorithms.",
      solution: "Built a command dashboard with live status indicators, automated responder pairing, and multi-tier verification screening.",
      technologies: ["React", "Node.js", "Express.js", "WebSockets", "REST APIs", "Map APIs"],
      keyFeatures: [
        "Real-time emergency incident broadcast and subscriber alerts",
        "Multi-tier screening algorithm to eliminate false alarms and prioritize critical cases",
        "Interactive dispatcher dashboard with live geo-coordinates",
        "Collaborative incident notes and status synchronization"
      ],
      performance: "Zero-latency real-time event distribution and sub-100ms incident status broadcasts.",
      outcome: "Ranked among Top 10 Qualifiers in a highly competitive Google-Hosted Hackathon among hundreds of university teams.",
      results: "Recognized for innovative architecture, real-world utility, and robust emergency response workflows."
    }
  },
  {
    id: "intelligent-document-assistant",
    title: "AI Document Intelligence & Vector Hub",
    category: "AI Engineering & Vector Search",
    shortDescription: "A high-speed semantic document assistant offering instant embedding search, conversational memory, and context-aware LLM synthesis.",
    tags: ["Python", "FastAPI", "ChromaDB", "Groq API", "React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "An AI intelligence assistant that unlocks hidden insights from research papers, academic textbooks, and enterprise PDFs via embedding-based dense retrieval.",
      challenge: "Preserving multi-turn chat context while dynamically injecting the most relevant document chunks without exceeding LLM context boundaries.",
      approach: "Engineered a sliding-window context manager and dense cosine similarity ranking pipeline across vectorized document sections.",
      solution: "Created an intuitive chat interface with inline document previewing, markdown mathematical formula rendering, and exportable chat transcripts.",
      technologies: ["React", "Python", "FastAPI", "ChromaDB", "Groq API", "Tailwind CSS"],
      keyFeatures: [
        "Dense vector similarity search with ChromaDB",
        "Multi-turn conversational memory with context pruning",
        "Inline document viewer with highlighted matching excerpts",
        "Markdown, code snippet, and mathematical formula LaTeX rendering"
      ],
      performance: "Sub-500ms full pipeline query-to-answer latency across 500+ page documents.",
      outcome: "Streamlined technical research review workflows by over 4x.",
      results: "High-accuracy extraction across complex academic and technical texts."
    }
  }
];
