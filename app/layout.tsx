import "@/style/style.scss";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Nav from "@/components/common/navbar/nav";

export const metadata: Metadata = {
    title: "Radiant Resorts",
    description: "Radiant Resorts: Your Premier Destination for Unforgettable Stays",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Nav />
                <Providers>
                    <main className="container mx-auto">{children}</main>
                </Providers>
            </body>
        </html>
    );
}
