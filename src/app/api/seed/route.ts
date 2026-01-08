import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const categories = ["Skincare", "Makeup", "Fragrance", "Haircare", "Bodycare"];
        const brands = ["Flow Beauty", "Luxe Glow", "Pure Essence", "Velvet Touch", "Radiance", "Silk & Smoke"];

        const baseProducts = [
            { name: "Glow Serum", category: "Skincare", description: "Potent Vitamin C and Hyaluronic Acid for a radiant, dewy finish." },
            { name: "Velvet Matte Lipstick", category: "Makeup", description: "Creamy, long-lasting matte color that hydrates your lips." },
            { name: "Rose Silk Moisturizer", category: "Skincare", description: "Infused with rosewater and peptides for deep overnight hydration." },
            { name: "Midnight Jasmine Perfume", category: "Fragrance", description: "A mysterious and seductive blend of jasmine, musk, and vanilla." },
            { name: "Argan Shine Conditioner", category: "Haircare", description: "Restore softness and shine with pure Moroccan argan oil." },
            { name: "Sea Salt Body Scrub", category: "Bodycare", description: "Exfoliate and mineralize with Mediterranean sea salt and citrus oils." },
            { name: "Precision Eyeliner", category: "Makeup", description: "Ultra-fine tip for perfect wings and waterproof 24h hold." },
            { name: "Charcoal Detox Mask", category: "Skincare", description: "Draw out impurities and minimize pores with activated charcoal." },
            { name: "Hydrating Setting Spray", category: "Makeup", description: "Lock in your look and keep skin fresh all day with aloe vera." },
            { name: "Lavender Dream Sleep Mask", category: "Skincare", description: "Ultra-comfortable weighted mask with soothing lavender scent." },
        ];

        const images: Record<string, string[]> = {
            "Skincare": ["https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"],
            "Makeup": ["https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=2070&auto=format&fit=crop"],
            "Fragrance": ["https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2004&auto=format&fit=crop"],
            "Haircare": ["https://images.unsplash.com/photo-1527799822367-31885720493f?q=80&w=1951&auto=format&fit=crop"],
            "Bodycare": ["https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=1886&auto=format&fit=crop"]
        };

        const manyProducts = [];
        for (let i = 1; i <= 105; i++) {
            const base = baseProducts[i % baseProducts.length];
            const brand = brands[Math.floor(Math.random() * brands.length)];
            const image = images[base.category][0];

            manyProducts.push({
                id: `prod-${i}`,
                name: `${brand} ${base.name} No. ${i}`,
                brand: brand,
                description: base.description,
                price: parseFloat((20 + (i * 0.5)).toFixed(2)),
                category: base.category,
                image: image,
                images: JSON.stringify([image]),
                stock: 50 + i,
                rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)),
                numReviews: 10 + i,
                featured: i <= 10,
            });
        }

        await prisma.product.deleteMany({});

        for (const product of manyProducts) {
            await prisma.product.create({ data: product });
        }

        return NextResponse.json({ success: true, count: manyProducts.length });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
