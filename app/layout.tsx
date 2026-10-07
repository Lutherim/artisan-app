import { Analytics } from "@vercel/analytics/next";

import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
    title: "ArtisanFind | Trusted Local Artisans",
    description:
        "Find vetted local plumbers, roofers, carpenters, pavers, electricians and painters.",
    generator: "Next.js",
};
export const viewport: Viewport = {
    colorScheme: "light",
    themeColor: "#0f172a",
};
export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
                {process.env.NODE_ENV === "production" && <Analytics />}
            </body>
        </html>
    );
}
