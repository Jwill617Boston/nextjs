/* eslint-disable @next/next/no-head-element */

import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./componets/Header";

const poppins = Poppins({
   weight: ["400", "700"],
   subsets: ["latin"],
});

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={poppins.className}>
            <nav>
               <Header />
            </nav>

            <main className="container">{children}</main>
         </body>
      </html>
   );
}
