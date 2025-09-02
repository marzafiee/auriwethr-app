import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import all SF Pro Display variants
const sfProDisplay = localFont({
  src: [
    {
      path: "../public/font/SFPRODISPLAYBLACKITALIC.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/font/SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/SFPRODISPLAYHEAVYITALIC.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/font/SFPRODISPLAYLIGHTITALIC.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/font/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/SFPRODISPLAYSEMIBOLDITALIC.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/font/SFPRODISPLAYTHINITALIC.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/font/SFPRODISPLAYULTRALIGHTITALIC.otf",
      weight: "200",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-sf-pro", // Used in Tailwind config
});

export const metadata: Metadata = {
  title: "auriwethr-app",
  description: "Generated using Next.js",
  //icons: {icon: "/turntabl_small.png",},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sfProDisplay.variable}>
      <body className="font-sf-pro antialiased">
        {children}
      </body>
    </html>
  );
}
