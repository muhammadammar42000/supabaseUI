import Image from "next/image";
import Navbar from "@/components/Navbar";
import CategoryRanking from "@/components/CategoryRanking";
import RecommendedServices from "@/components/RecommendedServices";
import RecommendedUsers from "@/components/RecommendedUsers";


export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <RecommendedServices />
      <RecommendedUsers />
      <CategoryRanking />
    </div>
  );
}
