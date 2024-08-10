import "./globals.css";
import { Russo_One } from "next/font/google";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/consts";
import { FC, PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const russo = Russo_One({
  weight: ["400"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

const RootLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang="en" className={russo.className}>
      <body className="font-sans text-white">
          <Navbar />
            {children}
          <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
