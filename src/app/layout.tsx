import type { Metadata } from "next";
import { Inter, Kantumruy_Pro, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/NavbarComponent";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import LoadingComponent from "./loading";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Mochi",
    default: "mochi-mochi",
  },
  description: "This is default shop",
  keywords: ["shop", "ecommerce", "sell", "mochi"],
  openGraph: {
    title: {
      template: "%s - Mochi",
      default: "mochi-mochi",
    },
    description: "This is default shop",
    images: [
      "https://i.pinimg.com/564x/c5/04/ce/c504ce97f611b279f88b30858e19dd0a.jpg",
    ],
  },
};

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-roboto_Condensed",
});

const kantumruy_pro = Kantumruy_Pro({
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-kantumruy-pro",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_Condensed.className} ${kantumruy_pro.className}`}>
        <NextUILayout>
          <NavbarComponent />
          <Suspense fallback={<LoadingComponent/>}>
            {children}
            </Suspense>
        </NextUILayout>
      </body>
    </html>
  );
}
