"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto space-y-12"
            >
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold">Terms of <span className="gradient-text">Service</span></h1>
                    <p className="text-muted-foreground italic">Last updated: January 2026</p>
                </div>

                <div className="prose prose-pink max-w-none space-y-8 text-lg text-muted-foreground leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                        <p>By accessing and using Flow Beauty, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">2. Use of Service</h2>
                        <p>You agree to use the service only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the service.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">3. Privacy Policy</h2>
                        <p>Your use of our service is also governed by our Privacy Policy, which is incorporated into these terms by reference.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">4. Intellectual Property</h2>
                        <p>All content included on the service, such as text, graphics, logos, images, and software, is the property of Flow Beauty or its content suppliers and protected by international copyright laws.</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
