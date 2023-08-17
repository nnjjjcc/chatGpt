import Image from "next/image";
import Navigation from "@/components/home/Navigation";
import Main from "@/components/home/Main/Main";
export default function Home() {
  return (
    <div className="h-full flex ">
      <Navigation></Navigation>
      <Main></Main>
    </div>
  );
}
