/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
   return (
      <html>
         <body>{children}</body>
      </html>
   );
}
