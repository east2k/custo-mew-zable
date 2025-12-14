import type { Metadata } from "next";
import { Indie_Flower } from "next/font/google";
import "./globals.css";

const indieFlower = Indie_Flower({
    subsets: ["latin"],
    variable: "--font-indie-flower",  
    weight: "400",
});

export const metadata: Metadata = {
    title: "CustoMewZable | Cat Customizer",
    description: "Create and customize your perfect minimalist cat",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={indieFlower.className}>{children}</body>
        </html>
    );
}
