"use client";

import { useState, useEffect, useCallback } from "react";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop",
        title: "Reveal Your Inner",
        highlightWord: "Glow",
        subtitle: "Experience more than just beauty. Discover a curated collection of skincare and cosmetics designed to empower your unique radiance.",
        cta: "Shop Collection",
        link: "/products"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2080&auto=format&fit=crop",
        title: "Eco-Conscious",
        highlightWord: "Luxury",
        subtitle: "Sustainable skincare that doesn't compromise on performance. Clean ingredients, powerful results.",
        cta: "Explore Skincare",
        link: "/products?category=skincare"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
        title: "The Art of",
        highlightWord: "Makeup",
        subtitle: "From natural glow to bold expressions. Find the perfect shades for every occasion, tailored for the modern explorer.",
        cta: "Browse Makeup",
        link: "/products?category=makeup"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=2070&auto=format&fit=crop",
        title: "Nourish Your",
        highlightWord: "Skin",
        subtitle: "Premium serums and treatments that transform your skincare routine into a luxurious ritual.",
        cta: "Shop Serums",
        link: "/products?category=skincare"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=2070&auto=format&fit=crop",
        title: "Professional",
        highlightWord: "Tools",
        subtitle: "Elevate your beauty routine with our curated selection of professional-grade makeup tools and brushes.",
        cta: "Explore Tools",
        link: "/products?category=tools"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2071&auto=format&fit=crop",
        title: "Timeless",
        highlightWord: "Elegance",
        subtitle: "Discover fragrances that capture your essence and leave a lasting impression wherever you go.",
        cta: "Find Your Scent",
        link: "/products?category=fragrance"
    }
];

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const nextSlide = useCallback(() => {
        setIsLoading(true);
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setIsLoading(true);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 7000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-50">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].id}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                >
                    <NextImage
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        className={`object-cover brightness-[0.85] transition-opacity duration-1000 ${isLoading ? "opacity-0" : "opacity-100"}`}
                        priority
                        onLoad={() => setIsLoading(false)}
                    />
                    {/* Pink-themed gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-pink-500/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-pink-900/30" />
                    <div className="absolute inset-0 bg-pink-500/10" />
                </motion.div>
            </AnimatePresence>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-center pt-24 sm:pt-32 md:pt-0">
                <div className="container mx-auto px-6 lg:px-16 xl:px-24">
                    <div className="max-w-5xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={slides[current].id}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -30, opacity: 0 }}
                                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-6 sm:space-y-10"
                            >
                                {/* Decorative badge */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="hidden sm:inline-block"
                                >
                                    <div className="px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold tracking-[0.3em] uppercase shadow-lg">
                                        ✨ Premium Beauty Collection
                                    </div>
                                </motion.div>

                                {/* Main Heading */}
                                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white leading-[1.2] sm:leading-[1.1] tracking-tight">
                                    {slides[current].title}{" "}
                                    <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-pink-200 via-pink-100 to-white bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,183,197,0.5)]">
                                        {slides[current].highlightWord}
                                    </span>
                                </h1>

                                {/* Subtitle */}
                                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl leading-relaxed drop-shadow-lg line-clamp-3 sm:line-clamp-none">
                                    {slides[current].subtitle}
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-6">
                                    <Link href={slides[current].link} className="w-full sm:w-auto">
                                        <Button
                                            size="lg"
                                            className="w-full sm:w-auto rounded-full px-8 sm:px-12 py-5 sm:py-8 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white text-sm sm:text-lg shadow-2xl shadow-pink-500/40 hover:shadow-pink-600/50 transition-all font-bold group border-0 hover:scale-105"
                                        >
                                            {slides[current].cta}
                                            <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
                                        </Button>
                                    </Link>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="hidden sm:flex rounded-full px-12 py-8 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 text-lg font-bold shadow-xl transition-all hover:scale-105"
                                    >
                                        Our Story
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden sm:flex absolute bottom-6 sm:bottom-16 right-4 sm:right-8 md:right-16 z-20 gap-2 sm:gap-4">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    className="rounded-full w-10 h-10 sm:w-16 sm:h-16 bg-white/15 backdrop-blur-md border border-white/40 text-white hover:bg-white/25 transition-all active:scale-95 shadow-xl"
                >
                    <ChevronLeft className="h-5 w-5 sm:h-8 sm:w-8" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    className="rounded-full w-10 h-10 sm:w-16 sm:h-16 bg-white/15 backdrop-blur-md border border-white/40 text-white hover:bg-white/25 transition-all active:scale-95 shadow-xl"
                >
                    <ChevronRight className="h-5 w-5 sm:h-8 sm:w-8" />
                </Button>
            </div>

            {/* Indicators */}
            <div className="hidden sm:flex absolute bottom-6 sm:bottom-16 left-6 sm:left-1/2 sm:-translate-x-1/2 z-20 gap-2 sm:gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setIsLoading(true);
                            setCurrent(i);
                        }}
                        className={`h-1.5 sm:h-2.5 transition-all duration-500 rounded-full shadow-lg ${i === current
                            ? "w-8 sm:w-16 bg-gradient-to-r from-pink-400 to-pink-300 shadow-pink-400/50"
                            : "w-1.5 sm:w-2.5 bg-white/50 hover:bg-white/70 hover:w-4 sm:hover:w-8"
                            }`}
                    />
                ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
    );
}
