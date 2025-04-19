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
      <Navbar />
      <div className="flex mt-2">
        <div className="w-1/5">
          <div className="p-3">
            <ProfileCard />
          </div>
        </div>
        <div className="w-4/5">
          <div className="p-3">
            <Banner />
            <RecommendedServices />
            <RecommendedUsers />
            <CategoryRanking />
          </div>
        </div>
      </div>
    </div>
  );
}
