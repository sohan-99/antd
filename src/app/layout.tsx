"use client";
import { ConfigProvider } from "antd";
import { antdTheme } from "@/utils/antd.config";
import { useEffect } from "react";
import { initGSAP } from "@/utils/gsap";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Initialize GSAP
    initGSAP();
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ConfigProvider theme={{ ...antdTheme }}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
