/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
   return (
      <html>
         <body>
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
