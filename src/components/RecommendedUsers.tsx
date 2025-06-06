import React from "react";
import Card from "./Card";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import UserCard from "./UserCard";

const cardsData = [
  {
    title: "Draw catchy and eye-catching illustrations anime",
    seller: {
      name: "Cleve Music",
      avatarText: "E",
    },
    badges: ["/google-icon.svg", "/google-icon.svg", "/google-icon.svg"],
    rating: 4.9,
    reviewsCount: 125,
    price: 101,
    imageUrl: "/images/sample.jpg",
  },
  {
    title: "Draw catchy and eye-catching illustrations anime",
    seller: {
      name: "Cleve Music",
      avatarText: "E",
    },
    badges: ["/google-icon.svg", "/google-icon.svg", "/google-icon.svg"],
    rating: 4.9,
    reviewsCount: 125,
    price: 101,
    imageUrl: "/images/sample.jpg",
  },
  {
    title: "Draw catchy and eye-catching illustrations anime",
    seller: {
      name: "Cleve Music",
      avatarText: "E",
    },
    badges: ["/google-icon.svg", "/google-icon.svg", "/google-icon.svg"],
    rating: 4.9,
    reviewsCount: 125,
    price: 101,
    imageUrl: "/images/sample.jpg",
  },
];
function RecommendedUsers() {
  return (
    <div className="">
      <div className="flex  justify-between p-2">
        <p className="text-[24px] text-black font-medium">
          Recommended Users
        </p>

        <div className="flex items-center justify-center cursor-pointer">
          {" "}
          <p className="mr-1 underline text-14px font-medium">More</p>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <div className=" flex gap-8 overflow-x-auto scrollbar-hide p-2">
        {cardsData.map((card, index) => (
          <UserCard  />
        ))}
      </div>
    </div>
  );
}

export default RecommendedUsers;
