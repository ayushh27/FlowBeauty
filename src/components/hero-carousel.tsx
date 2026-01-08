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
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop",
        title: "Reveal Your Inner Flow",
        subtitle: "Experience more than just beauty. Discover a curated collection of skincare and cosmetics designed to empower your unique radiance.",
        cta: "Shop Collection",
        link: "/products"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1596462502278-27bfaf410911?q=80&w=2080&auto=format&fit=crop",
        title: "Eco-Conscious Luxury",
        subtitle: "Sustainable skincare that doesn't compromise on performance. Clean ingredients, powerful results.",
        cta: "Explore Skincare",
        link: "/products?category=skincare"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1512496011212-32c70115c60a?q=80&w=2070&auto=format&fit=crop",
        title: "The Art of Makeup",
        subtitle: "From natural glow to bold expressions. Find the perfect shades for every occasion.",
        cta: "Browse Makeup",
        link: "/products?category=makeup"
    }
];

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative h-[90vh] w-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={slides[current].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <NextImage
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        className="object-cover brightness-75 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="container relative z-10 h-full flex items-center px-4">
                <div className="max-w-3xl space-y-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slides[current].id}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight">
                                {slides[current].title.split(" ").map((word, i) => (
                                    <span key={i} className={i === slides[current].title.split(" ").length - 1 ? "gradient-text" : ""}>
                                        {word}{" "}
                                    </span>
                                ))}
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                                {slides[current].subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="rounded-full px-10 py-7 bg-primary text-primary-foreground hover:bg-primary/90 text-lg premium-shadow-hover border-none font-medium">
                                    <Link href={slides[current].link} className="flex items-center">
                                        {slides[current].cta} <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full px-10 py-7 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-lg font-medium">
                                    Our Story
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-10 right-10 z-20 flex gap-4">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={prevSlide}
                    className="rounded-full w-12 h-12 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={nextSlide}
                    className="rounded-full w-12 h-12 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? "w-8 bg-white" : "w-2 bg-white/40"}`}
                    />
                ))}
            </div>
        </div>
    );
}
