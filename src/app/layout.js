/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./componets/Header";

const poppins = Poppins({
   weight: ["400", "700"],
   subsets: ["latin"],
});

export default function RootLayout({ children }) {
   return (
      <html>
         <body className={poppins.className}>
            <Header />
            <main className="container">{children}</main>
         </body>
      </html>
   );
}
