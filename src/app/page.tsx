"use client";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Star } from "lucide-react";
import Link from "next/link";
import { HeroCarousel } from "@/components/hero-carousel";
import { motion } from "framer-motion";
import NextImage from "next/image";

// Mock data
const featuredProducts = [
  {
    id: "glow-serum",
    name: "Glow Serum",
    category: "Skincare",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    id: "velvet-lipstick",
    name: "Velvet Lipstick",
    category: "Makeup",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=2070&auto=format&fit=crop",
    featured: true
  },
  {
    id: "hydrating-moisturizer",
    name: "Hydrating Moisturizer",
    category: "Skincare",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop",
    featured: true
  },
  {
    id: "floral-eau-de-parfum",
    name: "Floral Eau de Parfum",
    category: "Fragrance",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2004&auto=format&fit=crop",
    featured: true
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const reviews = [
  {
    id: 1,
    name: "Sophia Martinez",
    rating: 5,
    text: "The Glow Serum is a literal game changer. My skin has never looked this radiant!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Emma Wilson",
    rating: 5,
    text: "Absolute luxury in a bottle. The packaging and the results are both premium.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Olivia Chen",
    rating: 4,
    text: "Truly organic ingredients. I love that I can trust what I'm putting on my skin.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <HeroCarousel />

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-4">
            <div className="p-5 rounded-full bg-primary/20 text-primary-foreground border border-primary/10 premium-shadow">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold font-serif">Clean Ingredients</h3>
            <p className="text-muted-foreground text-lg">Certified organic and ethically sourced ingredients for your skin&apos;s health.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-4">
            <div className="p-5 rounded-full bg-primary/20 text-primary-foreground border border-primary/10 premium-shadow">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold font-serif">Dermatologist Tested</h3>
            <p className="text-muted-foreground text-lg">Clinically proven formulas that are safe even for the most sensitive skin.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-4">
            <div className="p-5 rounded-full bg-primary/20 text-primary-foreground border border-primary/10 premium-shadow">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold font-serif">Fast Results</h3>
            <p className="text-muted-foreground text-lg">Noticeable improvements in skin texture and radiance within 14 days.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-end"
        >
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Featured <span className="gradient-text">Favorites</span></h2>
            <p className="text-muted-foreground text-lg">Our community&apos;s most loved products this season.</p>
          </div>
          <Button variant="link" className="text-primary p-0 text-lg group">
            <Link href="/products" className="flex items-center">
              View All <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">What Our <span className="gradient-text">Beauties</span> Say</h2>
          <p className="text-muted-foreground text-lg">Real experiences from our lovely community.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              className="bg-secondary/10 p-8 rounded-[2.5rem] space-y-6 border border-primary/5 hover:border-primary/20 transition-all premium-shadow"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-accent text-accent" : "text-muted"}`} />
                ))}
              </div>
              <p className="text-lg italic text-foreground leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <NextImage src={review.image} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Verified Buyer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="relative px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto bg-primary/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden premium-shadow"
        >
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Join the Flow Beauty Club</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed italic">
              Sign up for exclusive access to new launches, beauty tips, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full px-8 py-5 bg-white border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg"
              />
              <Button className="rounded-full px-12 py-5 h-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg premium-shadow-hover transition-all font-medium border-none">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="absolute right-[-100px] top-[-100px] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-0" />
          <div className="absolute left-[-50px] bottom-[-50px] w-[300px] h-[300px] bg-accent/30 rounded-full blur-[80px] -z-0" />
        </motion.div>
      </section>
    </div>
  );
}

