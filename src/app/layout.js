import { Syne } from "next/font/google";
import React from "react";
import Head from "next/head";
import "./globals.css";
import "../styles/app.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { COLOR_SECONDARY } from "../styles/style-constants";
import HeaderLayout from "@/components/HeaderLayout";
import FooterLayout from "@/components/FooterLayout";
import MobileFooterNavigator from "@/components/MobileFooterNavigator";
const inter = Syne({ subsets: ["latin"] });


export const metadata = {
  title: "Bright Torque - B2B SaaS Product Design & Branding Agency",
  description: "We design market-ready B2B SaaS products, complex web apps and brand systems. Based in India — portfolio, services, and case studies",
    metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://brightorque.com"
  ),
  keywords: ["AI-first product design",
    "UX for AI products",
    "human-centered AI design",
    "enterprise UX modernization",
    "design systems for scale",
    "conversion-focused UX design",
    "product branding agency",
    "brand identity for SaaS",
    "startup branding agency",
    "digital brand design studio",
    "B2B brand identity design"],
  authors: [{ name: "Ayush Parashar" }],
  openGraph: {
    title: "Bright Torque",
    description: "We design market-ready B2B SaaS products, complex web apps and brand systems. Based in India — portfolio, services, and case studies",
    url: "https://brightorque.com",
    siteName: "Bright Torque Design Studios",
    images: [
      {
        url: "/Meta_image_Bright_Torque.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Torque",
    description: "We design market-ready B2B SaaS products, complex web apps and brand systems. Based in India — portfolio, services, and case studies",
    images: ["/Meta_image_Bright_Torque.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

 const RootLayout = ({ children }) => {
  return (
    <html lang="en"  className={inter.className}>

      <body>
        <div className="flex min-h-screen  min-w-screen ">
          <AntdRegistry>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: COLOR_SECONDARY,
                },
              }}
            >
              <div className="min-h-screen w-screen flex flex-col bg-white relative">
                <HeaderLayout />

                <div className="flex  bg-white min-h-screen w-full">
                  {children}
                </div>
                <div className="flex w-full ">
                  <FooterLayout />
                </div>
                <div className="sm:hidden sticky bottom-0 z-50 ">
                  <MobileFooterNavigator />
                </div>
              </div>
            </ConfigProvider>
          </AntdRegistry>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
