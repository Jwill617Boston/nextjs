import { Lora } from "next/font/google";

const lora = Lora({
   weight: ["400"],
   subsets: ["latin"],
});

export const metadata = {
   title: "Jason Next App",
   description: "This is my app that I am working on with NEXT.js",
};

const HomePage = () => {
   return (
      <>
         <h1>HomePage</h1>
         <p className={lora.className}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            molestiae ipsam, et aut consequatur ipsum voluptates quasi, quos
            recusandae doloribus provident consequuntur amet nobis est voluptate
            perferendis quaerat distinctio saepe dolores perspiciatis ex ab
            nostrum eaque! Porro perspiciatis possimus, sed a quidem sunt sit
            doloremque molestiae maiores blanditiis quasi quod.
         </p>
      </>
   );
};

export default HomePage;
