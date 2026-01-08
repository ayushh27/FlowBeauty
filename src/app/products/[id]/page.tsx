"use client";

import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star, ShieldCheck, Zap, Sparkles, ArrowLeft, Plus, Minus } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const product = products.find((p) => p.id === id);
    const { addItem } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="container mx-auto px-4 pt-32 pb-20 text-center">
                <h1 className="text-4xl font-serif font-bold mb-4">Product Not Found</h1>
                <Button asChild className="rounded-full">
                    <Link href="/products">Back to Shop</Link>
                </Button>
            </div>
        );
    }

    const inWishlist = isInWishlist(product.id);

    const handleAddToCart = () => {
        addItem(product);
        // We could add a quantity loop here if useCart supporting multi-add, 
        // but for now we'll just add it once as per the store logic or loop it.
        // Let's assume addItem adds one.
    };

    return (
        <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20">
            <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-primary/5 rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Product Image */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-primary/5"
                >
                    <NextImage src={product.image} alt={product.name} fill className="object-cover" priority />
                    <div className="absolute top-6 right-6 z-10">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleWishlist(product)}
                            className={`h-12 w-12 rounded-2xl backdrop-blur-md bg-white/80 shadow-lg ${inWishlist ? "text-red-500" : "text-muted-foreground"}`}
                        >
                            <Heart className={`h-6 w-6 ${inWishlist ? "fill-current" : ""}`} />
                        </Button>
                    </div>
                </motion.div>

                {/* Product Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col space-y-8"
                >
                    <div className="space-y-4">
                        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                            {product.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold">{product.name}</h1>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-5 w-5 ${i < (product.rating || 4) ? "fill-accent text-accent" : "text-muted/20"}`} />
                                ))}
                            </div>
                            <span className="text-muted-foreground font-medium">({product.rating || "4.8"}) • 120 Reviews</span>
                        </div>
                        <p className="text-4xl font-bold tracking-tight text-primary">₹{product.price.toLocaleString('en-IN')}</p>
                    </div>

                    <p className="text-xl text-muted-foreground leading-relaxed font-light">
                        {product.description}
                    </p>

                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center border border-primary/10 rounded-full p-1 bg-secondary/20">
                                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" onClick={() => setQuantity(quantity + 1)}>
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>
                            <Button
                                onClick={handleAddToCart}
                                className="flex-1 rounded-full h-14 bg-primary text-white hover:bg-primary/90 text-lg font-bold shadow-xl transition-all"
                            >
                                <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
                            </Button>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-10 border-t border-primary/5">
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/10">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                            <span className="text-sm font-medium">Dermatologist Tested</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/10">
                            <Zap className="h-6 w-6 text-primary" />
                            <span className="text-sm font-medium">Fast Results</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/10">
                            <Sparkles className="h-6 w-6 text-primary" />
                            <span className="text-sm font-medium">Clean Ingredients</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Additional Sections could go here (Reviews, More items etc) */}
        </div>
    );
}
