import Box from "@/Components/Box";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-950">
      <div className="p-12 mb-2">
        <div className="mx-auto w-[350px] text-center text-white flex flex-col justify-center gap-3 items-center">
          <span className="font-bold text-2xl">
            Buy me a chai
          </span>
          <span className="text-xl">
            Nothing this is just a tea page
          </span>
          <div className="flex gap-2">
            <button className="text-white rounded-xl bg-purple-700 p-2">Start Here</button>
            <button className="text-white rounded-xl bg-purple-700 p-2">Read More</button>
          </div>
        </div>
      </div>
      <div className="h-2 bg-white opacity-10"></div>
      <Box/>
    </main>
  );
}
