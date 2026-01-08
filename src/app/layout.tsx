import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { ScrollProgress } from "@/components/scroll-progress";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: "Flow Beauty | Premium Cosmetics & Skincare",
  description: "Experience the flow of beauty with our curated collection of cosmetics and skincare products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>
          <ScrollProgress />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <PageTransition>
              <main className="flex-1 overflow-hidden">{children}</main>
            </PageTransition>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
