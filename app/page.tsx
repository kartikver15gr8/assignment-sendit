import Aprodable from "@/components/Aprodable";
import Bottom from "@/components/Bottom";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Aprodable />
      <Team />
      <Bottom />
    </div>
  );
}
