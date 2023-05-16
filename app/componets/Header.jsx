


import Link from "next/link";


const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="logo">
               <Link href="/">Jason Next App</Link>
            </div>
            <div className="links">
               <Link href="/about">About</Link>
               <Link href="/team">Our Team</Link>
            </div>
         </div>
      </header>
   );
};
export default Header;
