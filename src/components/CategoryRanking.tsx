import React from "react";
import Card from "./Card";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
function CategoryRanking() {
  return (
    <div className="w-[80vw] p-10">
      <div className="flex  justify-between p-2">
        <p className="text-[24px] text-black font-medium">Category Ranking</p>
        <div className="flex items-center justify-center cursor-pointer">
          {" "}
          <p className="mr-1 underline text-14px font-medium">More</p>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <div className=" flex gap-8 overflow-x-auto scrollbar-hide p-2">
        {cardsData.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CategoryRanking;
