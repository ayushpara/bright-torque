import { Syne } from "next/font/google";
import React from "react";
import Head from "next/head";
import "./globals.css";
import "../styles/app.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "../styles/style-constants";
import HeaderLayout from "@/components/HeaderLayout";
import FooterLayout from "@/components/FooterLayout";
import MobileFooterNavigator from "@/components/MobileFooterNavigator";

const inter = Syne({ subsets: ["latin"] });

export const metadata = {
  title: "Bright Torque",
  description: "",
};

export const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>Bright Torque</title>
      </Head>

      <body className={inter.className}>
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
                <div className="sm:hidden sticky bottom-0 ">
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
