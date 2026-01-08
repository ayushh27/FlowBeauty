"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import NextImage from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { items, removeItem, updateQuantity, total } = useCart();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card z-[101] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-primary/5 flex items-center justify-between bg-card">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-serif font-bold">Your Bag</h2>
                                <span className="text-sm font-bold bg-primary/10 px-3 py-1 rounded-full text-primary">
                                    {items.length}
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-3 hover:bg-primary/5 rounded-2xl transition-colors"
                                aria-label="Close cart"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center">
                                        <ShoppingBag className="h-10 w-10 text-primary/30" />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xl font-serif font-bold text-foreground">Your bag is empty</p>
                                        <p className="text-muted-foreground">Looks like you haven&apos;t added any beauty gems yet.</p>
                                    </div>
                                    <Button
                                        onClick={onClose}
                                        className="rounded-2xl px-8 h-12 bg-black text-white hover:bg-black/80 font-bold uppercase tracking-widest text-xs"
                                    >
                                        Start Shopping
                                    </Button>
                                </div>
                            ) : (
                                items.map((item, idx) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-6 group"
                                    >
                                        <div className="relative w-24 h-32 rounded-2xl overflow-hidden bg-secondary/20 flex-shrink-0 border border-primary/5 shadow-sm">
                                            <NextImage
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">{item.category}</p>
                                                    <h3 className="font-serif font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
                                                        {item.name}
                                                    </h3>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-4 bg-secondary/30 p-1.5 rounded-xl border border-primary/5">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                        className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors"
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors"
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                </div>
                                                <p className="font-bold text-lg text-primary">
                                                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-8 bg-secondary/10 border-t border-primary/10 space-y-6 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
                                <div className="space-y-3">
                                    <div className="flex justify-between text-muted-foreground">
                                        <span className="font-medium">Subtotal</span>
                                        <span className="font-bold text-foreground">₹{total.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span className="font-medium">Shipping</span>
                                        <span className="font-bold text-accent uppercase text-xs tracking-widest pt-1">Free</span>
                                    </div>
                                    <div className="h-px bg-primary/10 my-4" />
                                    <div className="flex justify-between items-end">
                                        <span className="text-xl font-serif font-bold">Total</span>
                                        <div className="text-right">
                                            <p className="text-3xl font-bold tracking-tight text-primary">
                                                ₹{total.toLocaleString('en-IN')}
                                            </p>
                                            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest mt-1">incl. taxes</p>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full rounded-[1.5rem] bg-black text-white hover:bg-black/80 h-16 font-bold uppercase tracking-[0.2em] text-sm shadow-xl hover:shadow-2xl transition-all group">
                                    <Link href="/checkout" className="flex items-center justify-center w-full">
                                        Secure Checkout <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>

                                <p className="text-center text-[10px] text-muted-foreground font-medium flex items-center justify-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    Free shipping on all elite orders
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
