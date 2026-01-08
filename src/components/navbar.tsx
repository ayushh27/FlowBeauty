"use client";

import Link from "next/link";
import NextImage from "next/image";
import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { useCart } from "@/hooks/use-cart";
import { motion } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const cartItems = useCart((state) => state.items);
    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled ? "glass py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                <div className="flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 transition-transform duration-500 group-hover:scale-110">
                            <NextImage
                                src="/logo.png"
                                alt="Flow Beauty Logo"
                                fill
                                className="object-contain mix-blend-multiply"
                                priority
                            />
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        <Link href="/products" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Shop All</Link>
                        <Link href="/products?category=skincare" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Skincare</Link>
                        <Link href="/products?category=makeup" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Makeup</Link>
                    </div>
                </div>

                <div className="flex items-center gap-3 md:gap-6">
                    <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-primary/5 rounded-full">
                        <Search className="h-5 w-5" />
                    </Button>

                    <Link href="/cart">
                        <Button variant="ghost" size="icon" className="relative hover:bg-primary/5 rounded-full">
                            <ShoppingBag className="h-5 w-5" />
                            {itemCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground premium-shadow"
                                >
                                    {itemCount}
                                </motion.span>
                            )}
                        </Button>
                    </Link>

                    <Link href="/login">
                        <Button variant="outline" className="hidden sm:flex rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-transparent transition-all px-6 py-2 h-10 font-bold text-sm tracking-wider uppercase">
                            <User className="mr-2 h-4 w-4" />
                            Login
                        </Button>
                    </Link>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px]">
                            <div className="flex flex-col gap-6 mt-10">
                                <div className="flex justify-center mb-4">
                                    <NextImage src="/logo.png" alt="Logo" width={80} height={80} />
                                </div>
                                <Link href="/" className="text-lg font-medium">Home</Link>
                                <Link href="/products" className="text-lg font-medium">Shop All</Link>
                                <Link href="/products?category=skincare" className="text-lg font-medium">Skincare</Link>
                                <Link href="/products?category=makeup" className="text-lg font-medium">Makeup</Link>
                                <Link href="/login" className="text-lg font-medium">Account</Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
