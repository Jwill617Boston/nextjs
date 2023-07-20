export default function Page() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 pt-0 pb-0 ">
         <section className="w-screen h-screen flex items-center justify-center bg-stone-400">
            <div className="flex items-center justify-center"></div>
            <h1 className="m-3 p-4 bg-indigo-500">Section 1</h1>
            <h1 className="m-3 p-4 bg-orange-800">Section 1</h1>
         </section>
         <section className="w-screen h-screen flex items-center justify-center bg-red-500 ">
            <h1 className="m-3 p-4 bg-indigo-500">Section 2</h1>
            <h1 className="m-3 p-4 bg-orange-800">Section 2</h1>
         </section>
         <section className="w-screen h-screen flex items-center justify-center bg-yellow-300 ">
            <h1 className="m-3 p-4 bg-indigo-500">Section 3</h1>
            <h1 className="m-3 p-4 bg-orange-800">Section 3</h1>
         </section>
         <section className="w-screen h-screen flex items-center justify-center bg-lime-500">
            <h1 className="m-3 p-4 bg-indigo-500">Section 4</h1>
            <h1 className="m-3 p-4 bg-orange-800">Section 4</h1>
         </section>
      </main>
   );
}
