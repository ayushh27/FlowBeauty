"use client";

import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function CartPage() {
    const { items, removeItem, updateQuantity, clearCart } = useCart();

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 1000 ? 0 : 100;
    const total = subtotal + shipping;

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 pt-32 pb-20 text-center space-y-6">
                <div className="flex justify-center">
                    <div className="p-6 rounded-full bg-secondary/30">
                        <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                    </div>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-serif font-bold"
                >
                    Your cart is <span className="gradient-text">empty</span>
                </motion.h1>
                <p className="text-muted-foreground max-w-sm mx-auto text-lg font-light">
                    It looks like you haven't added any premium beauty products to your bag yet.
                </p>
                <Button asChild className="rounded-full px-12 h-14 text-lg bg-primary text-white shadow-xl hover:shadow-2xl transition-all">
                    <Link href="/products">Discover Products</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 pt-32 pb-20">
            <h1 className="text-4xl font-serif font-bold mb-10">Shopping <span className="gradient-text">Cart</span></h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 border rounded-2xl bg-card">
                            <div className="relative h-24 w-24 rounded-lg overflow-hidden flex-shrink-0">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase">{item.category}</p>
                                        <h3 className="font-bold">{item.name}</h3>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="text-destructive hover:text-destructive hover:bg-destructive/10">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex items-center border rounded-full px-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            <Minus className="h-3 w-3" />
                                        </Button>
                                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <Plus className="h-3 w-3" />
                                        </Button>
                                    </div>
                                    <p className="font-bold text-primary">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-between items-center pt-4">
                        <Button variant="ghost" asChild className="rounded-full">
                            <Link href="/products">← Back to Shopping</Link>
                        </Button>
                        <Button variant="ghost" onClick={clearCart} className="text-muted-foreground hover:text-destructive transition-colors">
                            Clear Cart
                        </Button>
                    </div>
                </div>

                <div className="bg-white/50 backdrop-blur-md p-8 rounded-[2.5rem] h-fit space-y-6 border border-primary/5 shadow-xl">
                    <h2 className="text-2xl font-serif font-bold tracking-tight">Order Summary</h2>

                    <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span className="font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Estimate Shipping</span>
                            <span className="font-medium">{shipping === 0 ? "FREE" : `₹${shipping.toLocaleString('en-IN')}`}</span>
                        </div>
                        {shipping > 0 && (
                            <p className="text-[10px] text-muted-foreground text-right italic">Free shipping on orders over ₹1,000</p>
                        )}
                        <Separator className="bg-primary/5" />
                        <div className="flex justify-between items-center font-bold text-xl">
                            <span>Total</span>
                            <span className="text-primary tracking-tight">₹{total.toLocaleString('en-IN')}</span>
                        </div>
                    </div>

                    <Button className="w-full rounded-full py-6 bg-primary text-white hover:bg-primary/90 text-lg">
                        Checkout <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
