import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-white border-t border-primary/5 pt-20 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-24 h-24 transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src="/logo.png"
                                    alt="Flow Beauty"
                                    fill
                                    className="object-contain mix-blend-multiply"
                                />
                            </div>
                        </Link>
                        <p className="text-lg text-muted-foreground leading-relaxed italic">
                            Elevating your everyday rituals into a flow of beauty and mindfulness.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif font-bold text-xl mb-6">Collections</h4>
                        <ul className="space-y-4 text-base text-muted-foreground">
                            <li><Link href="/products" className="hover:text-primary transition-colors font-medium">All Products</Link></li>
                            <li><Link href="/products?category=skincare" className="hover:text-primary transition-colors font-medium">Skincare Rituals</Link></li>
                            <li><Link href="/products?category=makeup" className="hover:text-primary transition-colors font-medium">Makeup Artistry</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif font-bold text-xl mb-6">Experience</h4>
                        <ul className="space-y-4 text-base text-muted-foreground">
                            <li><Link href="/faq" className="hover:text-primary transition-colors font-medium">Our Story</Link></li>
                            <li><Link href="/shipping" className="hover:text-primary transition-colors font-medium">Shipping & Delivery</Link></li>
                            <li><Link href="/returns" className="hover:text-primary transition-colors font-medium">Refund Policy</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors font-medium">Get in Touch</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif font-bold text-xl mb-6">Join the Community</h4>
                        <p className="text-base text-muted-foreground mb-6 leading-relaxed">Early access to drops and beauty secrets.</p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-secondary/20 border-none rounded-full px-6 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                            <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-bold hover:bg-primary/90 transition-all premium-shadow-hover">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-medium uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Flow Beauty. All rights reserved.</p>
                    <p>Made with ❤️ by Ayush Mishra.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
