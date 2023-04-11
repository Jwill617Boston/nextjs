/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
   return (
      <html>
         <body>
            <main>
               <nav>
                  <ul>
                     <li>
                        <Link href="/">Home</Link>
                     </li>
                  </ul>
               </nav>
               {children}
            </main>
         </body>
      </html>
   );
}
