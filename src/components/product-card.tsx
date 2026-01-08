"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
        category: string;
        featured?: boolean;
        rating?: number;
    };
}

export function ProductCard({ product }: ProductCardProps) {
    const addItem = useCart((state) => state.addItem);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="premium-shadow-hover group relative overflow-hidden bg-card rounded-[2rem] border border-primary/10 flex flex-col h-full bg-gradient-to-b from-white to-secondary/20"
        >
            <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />

                {product.featured && (
                    <Badge className="absolute top-4 left-4 bg-white/90 text-primary-foreground backdrop-blur-md border-none px-3 py-1 text-xs font-semibold premium-shadow">
                        Must Have
                    </Badge>
                )}

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full text-muted-foreground hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 premium-shadow"
                >
                    <Heart className="h-5 w-5" />
                </motion.button>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button
                        className="w-full rounded-full bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-md border-none premium-shadow-hover h-12 font-medium"
                        onClick={() => addItem(product)}
                    >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Quick Add
                    </Button>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1 gap-3">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <p className="text-[10px] text-primary/60 font-bold uppercase tracking-[0.2em]">{product.category}</p>
                        <h3 className="font-serif font-bold text-xl leading-tight text-foreground transition-colors group-hover:text-primary/80">
                            <Link href={`/products/${product.id}`}>{product.name}</Link>
                        </h3>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < (product.rating || 4) ? "fill-accent text-accent" : "fill-muted text-muted"}`} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">(48)</span>
                </div>

                <div className="mt-auto pt-2 flex justify-between items-center">
                    <p className="font-bold text-2xl tracking-tight text-primary-foreground">
                        ${product.price.toFixed(2)}
                    </p>
                    <Link
                        href={`/products/${product.id}`}
                        className="text-xs font-bold text-primary/60 hover:text-primary transition-colors underline underline-offset-4 decoration-primary/20"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

