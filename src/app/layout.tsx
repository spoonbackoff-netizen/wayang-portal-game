import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wayang — Portal Permainan Bayang",
  description:
    "Wayang is a Malaysian-themed game arcade. Step behind the kelir screen and choose your play — puzzles, rhythm, and quizzes lit by the flame of the pelita.",
  keywords: [
    "Wayang Kulit",
    "Malaysia",
    "game arcade",
    "puzzle game",
    "rhythm game",
    "quiz game",
    "shadow puppet",
    "permainan",
  ],
  authors: [{ name: "Wayang Arcade" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Wayang — Portal Permainan Bayang",
    description:
      "A Malaysian Wayang Kulit-inspired game arcade. Choose your play behind the kelir screen.",
    url: "https://chat.z.ai",
    siteName: "Wayang Arcade",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayang — Portal Permainan Bayang",
    description:
      "A Malaysian Wayang Kulit-inspired game arcade. Choose your play behind the kelir screen.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
