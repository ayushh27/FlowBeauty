"use client";

import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { products } from "@/lib/products";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Skincare", "Makeup", "Fragrance", "Body Care", "Hair Care"];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20 space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold">Shop <span className="gradient-text">All Products</span></h1>
                    <p className="text-muted-foreground text-lg">Premium beauty essentials for your daily routine.</p>
                </div>

                <div className="flex w-full md:w-auto gap-3">
                    <div className="relative flex-1 md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search products..."
                            className="pl-12 h-12 rounded-full border-primary/10 focus:border-primary/40 bg-white/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="rounded-full h-12 px-6 border-primary/10 hover:bg-primary/5">
                        <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                </div>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar mask-fade-right">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={selectedCategory === cat ? "default" : "secondary"}
                        className={`rounded-full px-8 h-12 transition-all ${selectedCategory === cat ? "shadow-lg scale-105" : "bg-card hover:bg-primary/5"}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            {filteredProducts.length > 0 ? (
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
                >
                    {filteredProducts.map((product) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            key={product.id}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>
            ) : (
                <div className="py-20 text-center space-y-4">
                    <div className="text-6xl text-primary/20">🔍</div>
                    <h2 className="text-2xl font-bold">No products found</h2>
                    <p className="text-muted-foreground">Try adjusting your search or category filters.</p>
                    <Button variant="link" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
                        Clear all filters
                    </Button>
                </div>
            )}
        </div>
    );
}
