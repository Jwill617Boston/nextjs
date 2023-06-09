"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
   const isUserLoggedIn = true;

   const [providers, setProviders] = useState(null);
   const [toggleDropDown, setToggleDropDown] = useState(true);

   useEffect(() => {
      const setProviders = async () => {
         const response = await getProviders();
         setProviders(response);
      };
      setProviders();
   });

   return (
      <nav className="flex-between w-full mb-16 pt-3">
         <Link href="/" className="flex gap-2 flex-center">
            <Image
               src="/assets/images/logo.svg"
               alt="Logo"
               width={37}
               height={37}
               className="object-contain"
            />
         </Link>

         <div className="sm:flex hidden">
            {isUserLoggedIn ? (
               <div className="flex gap-3 md:gap-5">
                  <Link href="/create-prompt" className="black_btn">
                     Create Post
                  </Link>
                  <button
                     type="button"
                     onClick={signOut}
                     className="outline-btn"
                  >
                     Sign Out
                  </button>
                  <Link href="/profile">
                     <Image
                        src="/assets/images/logo.svg"
                        width={37}
                        height={37}
                        alt="profile"
                        className="rounded-full"
                     />
                  </Link>
               </div>
            ) : (
               <>
                  {providers &&
                     Object.values(providers).map((provider) => {
                        <button
                           type="button"
                           key={provider.name}
                           className="black_btn"
                           onClick={() => {
                              signIn(provider.id);
                           }}
                        ></button>;
                     })}
               </>
            )}
         </div>

         {/* Mobile Navigation - What is seen at small */}
         <div className="sm:hidden flex relative">
            {isUserLoggedIn ? (
               <div className="flex">
                  <Image
                     src="/assets/images/logo.svg"
                     width={37}
                     height={37}
                     alt="profile"
                     className="rounded-full"
                     onClick={() => {
                        setToggleDropDown((prev) => {
                           !prev;
                        });
                     }}
                  />

                  {toggleDropDown && (
                     <div className="dropdown">
                        <Link
                           href="/profile"
                           className="dropdown_link"
                           onClick={() => {
                              setToggleDropDown(false);
                           }}
                        >
                           My Profile
                        </Link>
                     </div>
                  )}
               </div>
            ) : (
               <>
                  {providers &&
                     Object.values(providers).map((provider) => {
                        <button
                           type="button"
                           key={provider.name}
                           className="black_btn"
                           onClick={() => {
                              signIn(provider.id);
                           }}
                        ></button>;
                     })}
               </>
            )}
         </div>
      </nav>
   );
};

export default Nav;
