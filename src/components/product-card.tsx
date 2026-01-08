"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { useState } from "react";

interface Product {
    id: string;
    name: string;
    description?: string; // Made optional as it's not used in the current JSX
    price: number;
    image: string;
    category: string;
    featured?: boolean;
    rating?: number;
}

export function ProductCard({ product }: { product: Product }) {
    const { addItem } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const [isHovered, setIsHovered] = useState(false);
    const inWishlist = isInWishlist(product.id);

    // 3D Tilt Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="group relative h-full perspective-1000"
        >
            <motion.div
                className="relative bg-card rounded-[2.5rem] border border-primary/10 flex flex-col h-full overflow-hidden premium-shadow transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div
                    className="relative aspect-[4/5] overflow-hidden m-2 rounded-[1.5rem] md:rounded-[2rem]"
                    style={{ transform: "translateZ(50px)" }}
                >
                    <NextImage
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {product.featured && (
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10" style={{ transform: "translateZ(20px)" }}>
                            <Badge className="bg-primary/90 text-white backdrop-blur-md border-none px-3 py-1 md:px-4 md:py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest premium-shadow">
                                <Sparkles className="h-2.5 w-2.5 md:h-3 md:w-3 mr-1 md:mr-1.5" />
                                Elite Choice
                            </Badge>
                        </div>
                    )}

                    <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10 space-y-2">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                toggleWishlist(product);
                            }}
                            className={`p-2 md:p-3 bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl transition-all premium-shadow ${inWishlist ? "text-red-500 scale-110" : "text-muted-foreground hover:text-red-400"}`}
                        >
                            <Heart className={`h-4 w-4 md:h-5 md:w-5 ${inWishlist ? "fill-current" : ""}`} />
                        </button>
                    </div>

                    {/* Quick Add Button */}
                    <div
                        className="absolute inset-x-3 bottom-3 md:inset-x-4 md:bottom-4 z-10 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[0.22,1,0.36,1]"
                        style={{ transform: "translateZ(80px)" }}
                    >
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                addItem(product);
                            }}
                            className="w-full rounded-xl md:rounded-2xl bg-black text-white hover:bg-black/80 h-10 md:h-12 font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-2xl"
                        >
                            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                    </div>
                </div>

                <div className="p-4 sm:p-5 md:p-8 flex flex-col flex-1 gap-3 md:gap-4" style={{ transform: "translateZ(30px)" }}>
                    <div className="space-y-1 md:space-y-2">
                        <p className="text-[9px] md:text-[10px] text-primary font-bold uppercase tracking-[0.25em]">{product.category}</p>
                        <h3 className="font-serif font-bold text-xl md:text-2xl leading-tight text-foreground line-clamp-1">
                            <Link href={`/products/${product.id}`}>{product.name}</Link>
                        </h3>
                    </div>

                    <div className="flex items-center gap-1 md:gap-1.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 md:h-4 md:w-4 ${i < (product.rating || 4) ? "fill-accent text-accent" : "text-muted/20"}`} />
                        ))}
                        <span className="text-[10px] md:text-sm text-muted-foreground ml-1 font-medium">(48)</span>
                    </div>

                    <div className="mt-auto pt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-t border-primary/5">
                        <div className="space-y-0.5 sm:space-y-1">
                            <p className="text-[9px] sm:text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Starting from</p>
                            <p className="font-bold text-xl sm:text-2xl md:text-3xl tracking-tight text-foreground">
                                ₹{product.price.toLocaleString('en-IN')}
                            </p>
                        </div>
                        <Link
                            href={`/products/${product.id}`}
                            className="group/link flex items-center text-[10px] sm:text-xs md:text-sm font-bold text-primary transition-all pb-1 border-b border-transparent hover:border-primary w-fit translate-y-[-2px]"
                        >
                            View Details
                            <motion.span
                                className="ml-1.5 md:ml-2"
                                animate={{ x: isHovered ? 5 : 0 }}
                            >
                                <ShoppingCart className="h-3 w-3 md:h-4 md:w-4" />
                            </motion.span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div >
    );
}


