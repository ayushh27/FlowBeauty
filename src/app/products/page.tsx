import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const allProducts = [
    {
        id: "glow-serum",
        name: "Glow Serum",
        category: "Skincare",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
        featured: true
    },
    {
        id: "velvet-lipstick",
        name: "Velvet Lipstick",
        category: "Makeup",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=2070&auto=format&fit=crop",
        featured: true
    },
    {
        id: "hydrating-moisturizer",
        name: "Hydrating Moisturizer",
        category: "Skincare",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop",
        featured: true
    },
    {
        id: "floral-eau-de-parfum",
        name: "Floral Eau de Parfum",
        category: "Fragrance",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2004&auto=format&fit=crop",
        featured: true
    },
    {
        id: "mineral-sunscreen",
        name: "Mineral Sunscreen",
        category: "Skincare",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1556228578-8cc5df128731?q=80&w=1974&auto=format&fit=crop",
        featured: false
    }
];

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-20 space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-serif font-bold">Shop <span className="gradient-text">All Products</span></h1>
                    <p className="text-muted-foreground">Premium beauty essentials for your daily routine.</p>
                </div>

                <div className="flex w-full md:w-auto gap-2">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search products..." className="pl-10 rounded-full" />
                    </div>
                    <Button variant="outline" className="rounded-full">
                        <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {["All", "Skincare", "Makeup", "Fragrance", "Haircare", "Body"].map((cat) => (
                    <Button key={cat} variant={cat === "All" ? "default" : "secondary"} className="rounded-full px-6">
                        {cat}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {allProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
