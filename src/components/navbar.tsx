"use client";

import Link from "next/link";
import NextImage from "next/image";
import { ShoppingBag, Search, User, Menu, Sparkles, Star, Tag, MessageCircle, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { useCart } from "@/hooks/use-cart";
import { motion } from "framer-motion";
import { CartDrawer } from "./cart-drawer";
import { useSession, signOut } from "next-auth/react";

const navLinks = [
    { name: "New Arrivals", href: "/products?filter=new", icon: Sparkles },
    { name: "Best Sellers", href: "/products?filter=bestsellers", icon: Star },
    { name: "Categories", href: "/products", icon: Tag },
    { name: "Offers", href: "/products?filter=offers", icon: Tag },
    { name: "Reviews", href: "/#reviews", icon: MessageCircle },
    { name: "Support", href: "/support", icon: HeadphonesIcon },
];

export function Navbar() {
    const { data: session } = useSession();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
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
            className={`fixed top-0 z-50 w-full transition-all duration-700 ease-[0.22, 1, 0.36, 1] ${isScrolled
                ? "glass py-1.5 shadow-[0_8px_32px_rgba(255,183,197,0.15)] border-b border-pink-100/20"
                : "bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/80 backdrop-blur-md py-2.5 border-b border-pink-50/30"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12">
                {/* Main Navbar Row */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Link href="/" className="flex items-center group">
                            <div className="relative w-32 h-10 sm:w-44 sm:h-16 md:w-52 md:h-20 transition-all duration-700 group-hover:scale-105">
                                <NextImage
                                    src="/logo.svg"
                                    alt="Flow Beauty Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-10 xl:gap-14">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                            >
                                <Link
                                    href={link.href}
                                    className="group flex items-center gap-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-all relative py-2"
                                >
                                    <link.icon className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {link.name}
                                    <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-pink-300 transition-all duration-500 group-hover:w-full" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-2 md:gap-3"
                        >
                            <Button variant="ghost" size="icon" className="hidden lg:flex hover:bg-pink-50 rounded-xl transition-all h-9 w-9 group">
                                <Search className="h-4 w-4 text-foreground/60 group-hover:text-primary transition-colors" />
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative hover:bg-pink-50 rounded-xl transition-all group h-9 w-9"
                                onClick={() => setIsCartOpen(true)}
                            >
                                <ShoppingBag className="h-4 w-4 text-foreground/60 group-hover:text-primary transition-all group-hover:-rotate-12" />
                                {itemCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0, rotate: -45 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        className="absolute -top-1 -right-1 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-pink-500 text-[8px] md:text-[9px] font-bold text-white shadow-lg shadow-pink-300/50"
                                    >
                                        {itemCount}
                                    </motion.span>
                                )}
                            </Button>

                            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

                            {session ? (
                                <Button
                                    onClick={() => signOut()}
                                    className="rounded-xl bg-destructive/10 text-destructive hover:bg-destructive hover:text-white border-0 transition-all px-4 xl:px-5 py-1.5 h-9 font-bold text-[9px] tracking-[0.2em] uppercase"
                                >
                                    Logout
                                </Button>
                            ) : (
                                <Link href="/login" className="hidden md:block">
                                    <Button className="rounded-xl bg-gradient-to-r from-pink-400 to-pink-300 hover:from-pink-500 hover:to-pink-400 text-white border-0 transition-all px-4 xl:px-5 py-1.5 h-9 font-bold text-[9px] tracking-[0.2em] uppercase shadow-md shadow-pink-300/30 hover:shadow-lg hover:shadow-pink-400/40">
                                        <User className="mr-2 h-3.5 w-3.5" />
                                        Account
                                    </Button>
                                </Link>
                            )}
                        </motion.div>

                        {/* Mobile Menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="lg:hidden rounded-xl hover:bg-pink-50">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full sm:w-[400px] border-l border-pink-100/30 backdrop-blur-2xl bg-secondary/95">
                                <div className="flex flex-col gap-8 mt-12 px-6">
                                    <div className="flex justify-center mb-4">
                                        <div className="relative w-48 h-20">
                                            <NextImage src="/logo.svg" alt="Logo" fill className="object-contain" />
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        {navLinks.map((link, i) => (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.08 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className="flex items-center gap-4 text-xl font-semibold hover:text-primary transition-colors group"
                                                >
                                                    <link.icon className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors" />
                                                    {link.name}
                                                </Link>
                                            </motion.div>
                                        ))}
                                        <div className="pt-6 border-t border-pink-100">
                                            <Link href="/login" className="flex items-center gap-4 text-xl font-semibold hover:text-primary transition-colors group">
                                                <User className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors" />
                                                Account
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
