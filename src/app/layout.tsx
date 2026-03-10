import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import ThemeProvider from "../providers/theme-provider";


const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const chirp = localFont({
  src: [
    {
      path: "./fonts/Chirp-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Chirp-Medium.woff2",
      weight: "500",
      style: "normal",
    },

    {
      path: "./fonts/Chirp-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Chirp-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-chirp",
});

export const metadata: Metadata = {
  title: "X-(Twitter)",
  description: "A Twitter client built with Next.js and TypeScript.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${chirp.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto min-h-screen grid grid-cols-12 gap-5">

            {/* Left Sidebar */}
            <aside className="col-span-3">
              {/* <Sidebar /> */}
              sidebar goes here
            </aside>

            {/* Feed */}
            <main className="col-span-6 border-x border-[rgb(47, 51, 54)]">
              {children}
            </main>

            {/* Right Sidebar */}
            <aside className="col-span-3">
              {/* <RightSidebar /> */}
              right sidebar goes here
            </aside>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
