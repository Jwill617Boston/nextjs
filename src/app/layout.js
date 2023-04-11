/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
   weight: ["400", "700"],
   subsets: ["latin"],
});

export default function RootLayout({ children }) {
   return (
      <html>
         <body className={poppins.className}>
            <ul>
               <li>
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/about/team">Team</Link>
               </li>
            </ul>
            {children}
         </body>
      </html>
   );
}
