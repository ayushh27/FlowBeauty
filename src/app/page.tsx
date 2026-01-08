"use client";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Star } from "lucide-react";
import Link from "next/link";
import { HeroCarousel } from "@/components/hero-carousel";
import { motion } from "framer-motion";
import NextImage from "next/image";

import { products } from "@/lib/products";

// Mock data
const categories = [
  { name: "Skincare", icon: "✨", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop" },
  { name: "Makeup", icon: "💄", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop" },
  { name: "Fragrance", icon: "🌸", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&auto=format&fit=crop" },
  { name: "Body Care", icon: "🛁", image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=400&auto=format&fit=crop" },
  { name: "Hair Care", icon: "💇‍♀️", image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=400&auto=format&fit=crop" },
  { name: "Tools", icon: "🖌️", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400&auto=format&fit=crop" },
];

const featuredProducts = products.filter(p => p.featured).slice(0, 4);
const bestSellers = products.filter(p => p.rating && p.rating >= 4.8).slice(0, 4);
const trendingProducts = products.filter(p => p.trending).slice(0, 4);

const collections = [
  {
    title: "Summer Radiance",
    subtitle: "Golden hour glow in a bottle",
    image: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=2070&auto=format&fit=crop",
    link: "/products?collection=summer"
  },
  {
    title: "Midnight Ritual",
    subtitle: "Overnight transformation",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop",
    link: "/products?collection=midnight"
  }
];

const reviews = [
  {
    id: 1,
    name: "Ananya Sharma",
    rating: 5,
    text: "The Glow Serum is a literal game changer for my morning ritual. My skin finally has that natural Indian summer glow!",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1972&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priya Patel",
    rating: 5,
    text: "Absolute luxury in a bottle. The packaging and the results are both premium. Finally a brand that understands our skin.",
    image: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Ishita Iyer",
    rating: 4,
    text: "Truly organic ingredients. I love that I can trust what I'm putting on my skin. The fragrance is divine!",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    rating: 5,
    text: "The Arctic Blue mask is my go-to after a long day in the sun. Instant cooling and so much hydration!",
    image: "https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Meera Kapoor",
    rating: 5,
    text: "Best foundation I've ever used. It blends seamlessly and feels like second skin. 10/10 recommend!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Diya Malhotra",
    rating: 5,
    text: "I've tried everything for my dry skin, but the Hydrating Moisturizer is the only thing that works. Amazing!",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroCarousel />

      {/* Categories Showcase */}
      <section className="py-16 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            Curated Collections
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold"
          >
            Shop by <span className="gradient-text">Category</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl"
          >
            Find exactly what you need with our curated beauty segments.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-12"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden mb-6 border border-primary/5 shadow-sm group-hover:shadow-xl transition-all duration-500 bg-card">
                <NextImage src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-3xl group-hover:scale-125 transition-transform duration-500">
                  {cat.icon}
                </div>
              </div>
              <h3 className="text-center font-bold text-sm tracking-[0.1em] uppercase group-hover:text-primary transition-colors">{cat.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* New Product Launch */}
      <section className="relative overflow-hidden py-20 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold tracking-[0.2em] uppercase">
              Now Arriving
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1]">
              The <span className="gradient-text">Arctic Blue</span> Recovery Mask
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Experience the ultimate hydration with our new cooling charcoal-infused mask. Designed to soothe, repair, and revitalize stressed skin in just 10 minutes.
            </p>
            <div className="flex items-center gap-1 sm:gap-1.5 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />
              ))}
              <span className="text-muted-foreground ml-1 sm:ml-2 text-xs sm:text-base font-medium">(120+ Reviews)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mb-12">
              <div className="space-y-2">
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Pricing</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-bold">₹2,499</span>
                  <span className="text-lg sm:text-xl text-muted-foreground line-through decoration-primary/30">₹3,499</span>
                </div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-primary/10" />
              <div className="space-y-2">
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Available In</p>
                <p className="text-lg sm:text-xl font-bold">50 ml</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/products/arctic-blue-mask" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 sm:px-12 py-5 sm:py-7 h-auto bg-black text-white hover:bg-black/90 text-base sm:text-lg shadow-2xl transition-all font-bold group border-none">
                  Get it Now <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 sm:px-10 py-5 sm:py-7 h-auto text-base sm:text-lg border-black/10 hover:bg-black/5 font-bold transition-all">
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl"
          >
            <NextImage
              src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2070&auto=format&fit=crop"
              alt="New Product"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold tracking-[0.2em] uppercase">
              Customer Favorites
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold">Best <span className="gradient-text">Sellers</span></h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl">Our top-rated products that everyone is talking about.</p>
          </div>
          <Button variant="link" className="text-primary p-0 text-base sm:text-lg group h-auto" asChild>
            <Link href="/products" className="flex items-center font-bold">
              Shop All Products <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {bestSellers.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="flex h-full">
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {collections.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group relative h-[400px] sm:h-[500px] md:h-[650px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              <NextImage src={col.image} alt={col.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12 space-y-4 sm:space-y-6 text-white text-center sm:text-left">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold">{col.title}</h3>
                  <p className="text-lg sm:text-xl text-white/70 font-light">{col.subtitle}</p>
                </div>
                <Button className="w-full sm:w-auto rounded-full px-8 sm:px-10 py-5 sm:py-6 h-auto bg-white text-black hover:bg-white/90 font-bold group shadow-xl transition-all text-sm sm:text-lg">
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-12 sm:py-20 container mx-auto relative px-0">
        <div className="bg-black text-white rounded-[2rem] sm:rounded-[4rem] overflow-hidden relative py-12 sm:py-20 px-6 lg:px-12">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 space-y-8 md:space-y-0 text-center md:text-left">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                  Viral Beauty
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold">Now <span className="gradient-text">Trending</span></h2>
                <p className="text-white/60 text-base sm:text-lg max-w-xl">The hottest arrivals and viral beauty must-haves.</p>
              </div>
              <Button variant="link" className="text-white p-0 text-base sm:text-lg group h-auto" asChild>
                <Link href="/products" className="flex items-center font-bold">
                  View All Trending <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
            >
              {trendingProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants} className="flex h-full">
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center space-y-6 sm:space-y-8 group p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] bg-secondary/20 border border-transparent hover:border-primary/10 transition-all duration-500 h-full"
          >
            <div className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-card text-primary shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
              <Sparkles className="h-10 w-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif uppercase tracking-tight">Clean Ingredients</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Certified organic and ethically sourced ingredients for your skin&apos;s health.</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center space-y-8 group p-12 rounded-[3.5rem] bg-secondary/20 border border-transparent hover:border-primary/10 transition-all duration-500 h-full"
          >
            <div className="p-8 rounded-[2rem] bg-card text-primary shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif uppercase tracking-tight">Dermatologist Tested</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Clinically proven formulas that are safe even for the most sensitive skin.</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center text-center space-y-8 group p-12 rounded-[3.5rem] bg-secondary/20 border border-transparent hover:border-primary/10 transition-all duration-500 h-full"
          >
            <div className="p-8 rounded-[2rem] bg-card text-primary shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
              <Zap className="h-10 w-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif uppercase tracking-tight">Fast Results</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Noticeable improvements in skin texture and radiance within 14 days.</p>
            </div>
          </motion.div>
        </motion.div>
      </section >

      {/* Reviews Section */}
      < section id="reviews" className="py-20 container mx-auto px-6 lg:px-12 relative overflow-hidden" >
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -z-10 -translate-y-1/2 -translate-x-1/2" />

        <div className="text-center space-y-6 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            Community Voices
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold"
          >
            What Our <span className="gradient-text">Beauties</span> Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-xl max-w-2xl mx-auto"
          >
            Real results and experiences from our thriving community of beauty enthusiasts.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-card p-8 md:p-10 rounded-[3rem] md:rounded-[4rem] space-y-6 md:space-y-8 border border-black/5 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group flex flex-col justify-between h-full"
            >
              <div className="absolute top-0 right-0 p-6 md:p-8 text-primary/5 transition-transform group-hover:scale-125 duration-700">
                <Star className="h-16 w-16 md:h-20 md:w-20 fill-current" />
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 md:h-5 md:w-5 ${i < review.rating ? "fill-accent text-accent" : "text-muted/20"}`} />
                  ))}
                </div>
                <p className="text-xl md:text-2xl italic text-foreground leading-relaxed relative z-10 font-serif line-clamp-4">
                  &quot;{review.text}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 md:gap-6 pt-6 md:pt-10 border-t border-black/5">
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-500">
                  <NextImage src={review.image} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-lg md:text-xl text-foreground">{review.name}</p>
                  <p className="text-[9px] md:text-[10px] text-primary font-bold uppercase tracking-[0.2em]">Verified Beauty</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section >

      {/* Call to Action */}
      < section className="relative px-6 md:px-12 pb-20" >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="container mx-auto rounded-[5rem] p-16 md:p-32 relative overflow-hidden shadow-2xl bg-black text-white"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 opacity-40" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-10 blur-[150px] bg-primary rounded-full translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-[0.3em] uppercase mb-12"
            >
              The Flow Beauty Club
            </motion.div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold mb-8 sm:mb-10 leading-[1.1]">Join the Inner <span className="gradient-text">Glow</span></h2>
            <p className="text-lg sm:text-2xl text-white/60 mb-10 sm:mb-16 leading-relaxed max-w-xl font-light">
              Sign up for exclusive access to new launches, beauty tips, and special offers from our master artisans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-2xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full px-8 sm:px-10 py-5 sm:py-7 bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-base sm:text-xl transition-all backdrop-blur-md"
              />
              <Button className="rounded-full px-10 sm:px-14 py-5 sm:py-7 h-auto bg-white text-black hover:bg-white/90 text-base sm:text-xl shadow-xl hover:shadow-2xl transition-all font-bold group border-none">
                Subscribe <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4">
            <Sparkles className="h-[800px] w-[800px] text-primary" />
          </div>
        </motion.div>
      </section >
    </div >
  );
}

