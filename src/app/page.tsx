import Image from "next/image";
import Navbar from "@/components/Navbar";

import CategoryRanking from "@/components/CategoryRanking";
import RecommendedServices from "@/components/RecommendedServices";
import RecommendedUsers from "@/components/RecommendedUsers";


import ProfileCard from "@/components/ProfileCard";
import Banner from "@/components/Banner";


export default function Home() {
  return (
    <div>

      {/* <Navbar /> */}
      <RecommendedServices />
      <RecommendedUsers />
      <CategoryRanking />

      <Navbar />
      <ProfileCard />
      <div className="mt-2">
        <Banner />
      </div>

    </div>
  );
}
