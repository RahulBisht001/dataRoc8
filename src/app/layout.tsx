import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({
    src: [
        {
            path: "./fonts/Outfit-Light.otf",
            weight: "300",
        },
        {
            path: "./fonts/Outfit-Regular.otf",
            weight: "400",
        },
        {
            path: "./fonts/Outfit-Medium.otf",
            weight: "500",
        },
        {
            path: "./fonts/Outfit-SemiBold.otf",
            weight: "600",
        },
        {
            path: "./fonts/Outfit-Bold.otf",
            weight: "700",
        },
        {
            path: "./fonts/Outfit-ExtraBold.otf",
            weight: "800",
        },
    ],
    variable: "--font-outfit",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Web analytiX",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} antialiased`}>{children}</body>
        </html>
    );
}