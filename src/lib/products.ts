export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating?: number;
    featured?: boolean;
    trending?: boolean;
    details?: string[];
    ingredients?: string;
}

export const products: Product[] = [
    {
        id: "glow-serum",
        name: "Glow Serum",
        description: "A lightweight, vitamin-C enriched serum that brightens skin and provides a natural glow.",
        category: "Skincare",
        price: 3499,
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop",
        featured: true,
        rating: 4.8,
        details: ["Brightens overall complexion", "Reduces fine lines", "Deep hydration"],
        ingredients: "Vitamin C, Hyaluronic Acid, Ferulic Acid"
    },
    {
        id: "velvet-lipstick",
        name: "Velvet Lipstick",
        description: "Intensely pigmented matte lipstick that feels weights on the lips.",
        category: "Makeup",
        price: 1299,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=2070&auto=format&fit=crop",
        featured: true,
        rating: 4.9,
        details: ["12-hour wear", "Smudge-proof", "Nourishing formula"]
    },
    {
        id: "hydrating-moisturizer",
        name: "Hydrating Moisturizer",
        description: "A rich, non-greasy cream that locks in moisture for 24 hours.",
        category: "Skincare",
        price: 2199,
        image: "https://images.unsplash.com/photo-1570172619661-893bd77b7520?q=80&w=1974&auto=format&fit=crop",
        featured: true,
        rating: 4.7
    },
    {
        id: "floral-eau-de-parfum",
        name: "Floral Eau de Parfum",
        description: "A delicate blend of jasmine, rose, and peony for a timeless feminine scent.",
        category: "Fragrance",
        price: 5499,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2004&auto=format&fit=crop",
        featured: true,
        rating: 4.9
    },
    {
        id: "rose-water-toner",
        name: "Rose Water Toner",
        description: "Pure infusion of Bulgarian roses to refresh and balance your skin.",
        category: "Skincare",
        price: 1499,
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1974&auto=format&fit=crop",
        rating: 4.9
    },
    {
        id: "silk-foundation",
        name: "Silk Foundation",
        description: "Build-able coverage with a luminous silk finish.",
        category: "Makeup",
        price: 2899,
        image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?q=80&w=1974&auto=format&fit=crop",
        rating: 5.0
    },
    {
        id: "midnight-recovery-oil",
        name: "Midnight Recovery Oil",
        description: "A potent botanical blend that repairs skin overnight.",
        category: "Skincare",
        price: 4299,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop",
        rating: 4.8
    },
    {
        id: "lash-lift-mascara",
        name: "Lash Lift Mascara",
        description: "Dramatic length and volume without clumping.",
        category: "Makeup",
        price: 1199,
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1974&auto=format&fit=crop",
        rating: 4.7
    },
    {
        id: "tinted-lip-balm",
        name: "Tinted Lip Balm",
        description: "Subtle color with intense hydration from shea butter.",
        category: "Makeup",
        price: 899,
        image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=2000&auto=format&fit=crop",
        trending: true,
        rating: 4.6
    },
    {
        id: "creamy-concealer",
        name: "Creamy Concealer",
        description: "Hides imperfections while soothing the skin with aloe vera.",
        category: "Makeup",
        price: 999,
        image: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=2070&auto=format&fit=crop",
        trending: true,
        rating: 4.8
    },
    {
        id: "charcoal-mask",
        name: "Charcoal Mask",
        description: "Deep-cleansing detox mask to draw out impurities.",
        category: "Skincare",
        price: 1899,
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2070&auto=format&fit=crop",
        trending: true,
        rating: 4.7
    },
    {
        id: "face-mist",
        name: "Refreshing Face Mist",
        description: "Instantly hydrates and sets makeup for an all-day fresh look.",
        category: "Skincare",
        price: 1299,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2070&auto=format&fit=crop",
        trending: true,
        rating: 4.9
    },
    {
        id: "arctic-blue-mask",
        name: "Arctic Blue Recovery Mask",
        description: "Experience the ultimate hydration with our charcoal-infused cooling mask. Designed to soothe, repair, and revitalize stressed skin in just 10 minutes.",
        category: "Skincare",
        price: 2499,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2070&auto=format&fit=crop",
        rating: 4.9,
        details: ["Cooling effect", "Detoxifies pores", "Repairs skin barrier"]
    }
];
