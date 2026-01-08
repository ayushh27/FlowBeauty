"use client";

import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
    const { items, removeItem, updateQuantity, clearCart } = useCart();

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 pt-32 pb-20 text-center space-y-6">
                <div className="flex justify-center">
                    <div className="p-6 rounded-full bg-secondary/30">
                        <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                    </div>
                </div>
                <h1 className="text-3xl font-serif font-bold">Your cart is empty</h1>
                <p className="text-muted-foreground max-w-md mx-auto">
                    It looks like you haven't added any premium beauty products to your cart yet.
                </p>
                <Button asChild className="rounded-full px-8">
                    <Link href="/products">Continue Shopping</Link>
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
                                    <p className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-between items-center pt-4">
                        <Button variant="ghost" asChild>
                            <Link href="/products">← Back to Shopping</Link>
                        </Button>
                        <Button variant="ghost" onClick={clearCart} className="text-muted-foreground">
                            Clear Cart
                        </Button>
                    </div>
                </div>

                <div className="bg-secondary/20 p-8 rounded-3xl h-fit space-y-6">
                    <h2 className="text-2xl font-serif font-bold">Order Summary</h2>

                    <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Shipping</span>
                            <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                        </div>
                        {shipping > 0 && (
                            <p className="text-[10px] text-muted-foreground text-right italic">Free shipping on orders over $100</p>
                        )}
                        <Separator />
                        <div className="flex justify-between items-center font-bold text-lg">
                            <span>Total</span>
                            <span className="text-primary">${total.toFixed(2)}</span>
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
