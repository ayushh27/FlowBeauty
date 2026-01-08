"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Register attempt:", { name, email, password });
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-white">
            {/* Animated Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -60, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-15%] right-[-10%] w-[550px] h-[550px] bg-primary/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 40, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-15%] left-[-10%] w-[650px] h-[650px] bg-accent/20 rounded-full blur-[120px]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="w-full max-w-md"
            >
                <Card className="glass border-white/20 shadow-2xl rounded-[2.5rem] overflow-hidden">
                    <div className="h-1.5 bg-gradient-to-r from-accent via-primary to-accent" />
                    <CardHeader className="space-y-2 pt-10">
                        <CardTitle className="text-4xl font-serif font-bold text-center tracking-tight text-foreground">
                            Create <span className="gradient-text">Account</span>
                        </CardTitle>
                        <CardDescription className="text-center text-base px-2">
                            Join Flow Beauty for exclusive collections and a personalized journey
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-8 pt-6">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2 relative group">
                                <label className="text-sm font-bold text-primary/60 ml-4 mb-1 block uppercase tracking-wider">Full Name</label>
                                <Input
                                    type="text"
                                    placeholder="Your spectacular name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="rounded-full bg-white/50 border-primary/10 focus:border-primary/40 focus:bg-white h-14 px-6 text-lg transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2 relative group">
                                <label className="text-sm font-bold text-primary/60 ml-4 mb-1 block uppercase tracking-wider">Email Address</label>
                                <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="rounded-full bg-white/50 border-primary/10 focus:border-primary/40 focus:bg-white h-14 px-6 text-lg transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2 relative group">
                                <label className="text-sm font-bold text-primary/60 ml-4 mb-1 block uppercase tracking-wider">Create Password</label>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="rounded-full bg-white/50 border-primary/10 focus:border-primary/40 focus:bg-white h-14 px-6 text-lg transition-all"
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-xl font-bold premium-shadow-hover transition-all border-none mt-4"
                            >
                                Sign Up
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 pb-12 px-8">
                        <p className="text-center text-base text-muted-foreground">
                            Already a member?{" "}
                            <Link href="/login" className="text-primary hover:text-primary/80 transition-colors font-black underline underline-offset-4 decoration-primary/20">
                                Login Here
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}

