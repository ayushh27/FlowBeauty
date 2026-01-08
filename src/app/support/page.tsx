"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Clock, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SupportPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const contactMethods = [
        {
            icon: Mail,
            title: "Email Support",
            description: "support@flowbeauty.com",
            detail: "We'll respond within 24 hours",
            color: "from-pink-400 to-pink-500"
        },
        {
            icon: Phone,
            title: "Phone Support",
            description: "+1 (555) 123-4567",
            detail: "Mon-Fri, 9AM-6PM EST",
            color: "from-pink-500 to-pink-600"
        },
        {
            icon: MessageCircle,
            title: "Live Chat",
            description: "Chat with our team",
            detail: "Available 24/7",
            color: "from-pink-300 to-pink-400"
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 lg:px-12 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                        ✨ We're Here to Help
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6">
                        Customer <span className="gradient-text">Support</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Have questions? Our dedicated support team is ready to assist you with anything you need.
                    </p>
                </motion.div>
            </section>

            {/* Contact Methods */}
            <section className="container mx-auto px-6 lg:px-12 mb-16 md:mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-card rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100/50 hover:border-pink-200 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br ${method.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-pink-300/30 group-hover:scale-110 transition-transform`}>
                                <method.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-2">{method.title}</h3>
                            <p className="text-base md:text-lg text-foreground/80 mb-2">{method.description}</p>
                            <p className="text-xs md:text-sm text-muted-foreground">{method.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Form */}
            <section className="container mx-auto px-6 lg:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-gradient-to-br from-pink-50 to-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-xl border border-pink-100/50"
                >
                    <div className="text-center mb-8 md:mb-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                            Send Us a <span className="gradient-text">Message</span>
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-lg">
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-foreground/80">Your Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-card"
                                    placeholder="Jane Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-foreground/80">Email Address</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-card"
                                    placeholder="jane@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2 text-foreground/80">Subject</label>
                            <input
                                type="text"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full px-6 py-4 rounded-2xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all bg-card"
                                placeholder="How can we help you?"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2 text-foreground/80">Message</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={6}
                                className="w-full px-6 py-4 rounded-2xl border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none bg-card"
                                placeholder="Tell us more about your inquiry..."
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full md:w-auto rounded-2xl px-12 py-6 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white text-lg font-bold shadow-xl shadow-pink-300/40 hover:shadow-2xl hover:shadow-pink-400/50 transition-all border-0 group"
                        >
                            Send Message
                            <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>
                </motion.div>
            </section>

            {/* Additional Info */}
            <section className="container mx-auto px-6 lg:px-12 mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-card rounded-2xl p-8 shadow-lg border border-pink-100/50"
                    >
                        <Clock className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-2xl font-bold mb-3">Business Hours</h3>
                        <div className="space-y-2 text-muted-foreground">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                            <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-card rounded-2xl p-8 shadow-lg border border-pink-100/50"
                    >
                        <MapPin className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-2xl font-bold mb-3">Visit Us</h3>
                        <div className="space-y-2 text-muted-foreground">
                            <p>123 Beauty Boulevard</p>
                            <p>Suite 456</p>
                            <p>New York, NY 10001</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
