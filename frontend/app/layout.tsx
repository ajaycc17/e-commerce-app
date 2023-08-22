import type { Metadata } from "next";
import { Roboto, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-roboto",
});

const spGrot = Space_Grotesk({
    weight: ["400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    variable: "--font-spGrot",
});

export const metadata: Metadata = {
    title: "Old'sCool",
    description: "One Stop for Items Exchange in Campus",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} font-sans ${spGrot.variable} font-head`}
            >
                <Navbar />
                <main className="min-h-[calc(100vh-110px)]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
