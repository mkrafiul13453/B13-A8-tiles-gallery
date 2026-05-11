import Banner from "@/components/Banner";
import Tiles from "@/components/Tiles";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Banner></Banner>
      <Tiles></Tiles>
    </div>
  );
}
