"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setError("Invalid email or password");
            } else {
                router.push("/");
                router.refresh();
            }
        } catch (err) {
            setError("An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-white">
            {/* Animated Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, 60, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="w-full max-w-md"
            >
                <Card className="glass border-white/20 shadow-2xl rounded-[2.5rem] overflow-hidden">
                    <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
                    <CardHeader className="space-y-2 pt-10">
                        <CardTitle className="text-4xl font-serif font-bold text-center tracking-tight text-foreground">
                            Welcome <span className="gradient-text">Back</span>
                        </CardTitle>
                        <CardDescription className="text-center text-base">
                            Step into your personal flow of beauty
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-8 pt-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    className="p-3 rounded-2xl bg-destructive/10 text-destructive text-sm font-bold text-center"
                                >
                                    {error}
                                </motion.div>
                            )}
                            <div className="space-y-2 relative group">
                                <label className="text-sm font-bold text-primary/60 ml-4 mb-1 block uppercase tracking-wider">Email Address</label>
                                <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="rounded-full bg-white/50 border-primary/10 focus:border-primary/40 focus:bg-white h-14 px-6 text-lg transition-all"
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="space-y-2 relative group">
                                <div className="flex justify-between items-center ml-4 mb-1">
                                    <label className="text-sm font-bold text-primary/60 uppercase tracking-wider">Password</label>
                                    <Link href="/forgot-password" className="text-xs text-primary/60 hover:text-primary transition-colors font-medium">
                                        Forgot?
                                    </Link>
                                </div>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="rounded-full bg-white/50 border-primary/10 focus:border-primary/40 focus:bg-white h-14 px-6 text-lg transition-all"
                                    required
                                    disabled={isLoading}
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-xl font-bold premium-shadow-hover transition-all border-none mt-4 disabled:opacity-50"
                            >
                                {isLoading ? "Checking Credentials..." : "Login"}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-6 pb-12 px-8">
                        <div className="relative w-full">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-primary/10" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-transparent backdrop-blur-sm px-4 text-muted-foreground font-bold tracking-widest">Or login with</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <Button variant="outline" className="rounded-full h-12 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all font-medium">
                                Google
                            </Button>
                            <Button variant="outline" className="rounded-full h-12 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all font-medium">
                                GitHub
                            </Button>
                        </div>
                        <p className="text-center text-base text-muted-foreground">
                            New to Flow Beauty?{" "}
                            <Link href="/register" className="text-primary hover:text-primary/80 transition-colors font-black underline underline-offset-4 decoration-primary/20">
                                Create Account
                            </Link>
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}

