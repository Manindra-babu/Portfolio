/**
 * Studio Content Data
 * 
 * Custom content for Shan's interactive monitor towers.
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '▶',
        label: 'Tech Demo',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#5BE7FF',
        accentColor: '#00D9FF',
        icon: '📝',
        label: 'Case Study',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '📱',
        label: 'Micro Motion',
        shape: 'phone', // Vertical phone
    },
    linkedin: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: 'in',
        label: 'Milestone',
        shape: 'monitor',
    },
    codrops: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '💧',
        label: 'Featured',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    // ============ Case Studies / Projects ============
    {
        id: 'studio-rag-system',
        platform: 'blog',
        title: 'RAG Architecture: High-Speed Document Chat with Groq & ChromaDB',
        description: 'Building a full stack RAG application that lets users upload private documents (PDFs, DOCX, TXT) and chat with them accurately with Groq LLM streaming.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#project/knowledge-base-retrieval-system',
        date: '2026-03-24',
        readTime: '8 min',
    },
    {
        id: 'studio-custom-gpt',
        platform: 'blog',
        title: 'Custom GPT: Building a Transformer from Scratch in PyTorch',
        description: 'Engineering multi-head self-attention, causal masking, positional embeddings, and custom dataset tokenization loops.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: '#project/custom-gpt',
        date: '2026-02-15',
        readTime: '7 min',
    },
    {
        id: 'studio-technical-hub-mern',
        platform: 'blog',
        title: 'Full Stack MERN Architecture: Secured REST APIs & Firebase Auth',
        description: 'Production-ready full-stack applications with MERN stack, Firebase JWT validation, and Tailwind CSS responsive UI developed at Technical Hub.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: '#project/technical-hub-mern-portal',
        date: '2026-01-10',
        readTime: '9 min',
    },
    {
        id: 'studio-emergency-network',
        platform: 'linkedin',
        title: 'Google-Hosted Hackathon: Emergency Response Network System',
        description: 'Top 10 Qualifier: Architecting low-latency incident screening, WebSocket live broadcasting, and dynamic responder routing.',
        thumbnail: null,
        url: '#project/emergency-response-network',
        date: '2025-12-18',
        readTime: '6 min',
    },
    {
        id: 'studio-vector-embeddings',
        platform: 'blog',
        title: 'Vector Embeddings & Semantic Search in ChromaDB',
        description: 'Deep dive into cosine similarity, token chunking strategies, and sub-second dense vector indexing across large document corpora.',
        thumbnail: null,
        url: '#project/intelligent-document-assistant',
        date: '2025-11-28',
        readTime: '7 min',
    },
    {
        id: 'studio-micro-motion',
        platform: 'tiktok',
        title: 'Designing Interactive Full Stack UI with React & Tailwind CSS',
        description: 'Frontend POV: Building accessible, responsive, and tactile web interfaces with micro-interactions and clean component hierarchies.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-03-01',
        views: '5.2K',
        likes: '840',
    },
    {
        id: 'studio-dsa-systems',
        platform: 'blog',
        title: 'Data Structures & Algorithms: Optimization for Scalable Systems',
        description: 'Algorithmic problem solving and fundamental computer science benchmarks in C++, Java, and Python.',
        thumbnail: null,
        url: '#',
        date: '2025-10-15',
        readTime: '10 min',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
