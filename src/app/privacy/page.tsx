"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto space-y-12"
            >
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold">Privacy <span className="gradient-text">Policy</span></h1>
                    <p className="text-muted-foreground italic">Last updated: January 2026</p>
                </div>

                <div className="prose prose-pink max-w-none space-y-8 text-lg text-muted-foreground leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">1. Data Collection</h2>
                        <p>We collect information that you provide to us directly, such as when you create an account, make a purchase, or contact our support team.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">2. Use of Information</h2>
                        <p>We use the information we collect to provide and improve our services, process your transactions, and communicate with you about your account and our products.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">3. Information Sharing</h2>
                        <p>We do not share your personal information with third parties except as necessary to provide our services or as required by law.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">4. Security</h2>
                        <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
