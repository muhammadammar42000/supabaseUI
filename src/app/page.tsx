import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ProfileCard />
      <div className="mt-2">
        <Banner />
      </div>
    </div>
  );
}
