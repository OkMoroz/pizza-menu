import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    weight: ['300', '400', '500'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Fast Pizza Co.',
    description: 'Delicious pizza from a stone oven',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${robotoMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
