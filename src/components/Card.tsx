import React from "react";

interface CardProps {
  card: {
    title: string;
    seller: {
      name: string;
      avatarText: string;
    };
    badges: string[];
    rating: number;
    reviewsCount: number;
    price: number;
    imageUrl: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="mx-auto border-none cursor-pointer rounded-xl overflow-hidden shadow-sm border bg-white w-full min-w-[350px] max-w-sm transform transition-transform duration-300 hover:scale-105">
      <img
        src="./cardImage.png"
        alt={card.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className=" font-medium text-[#0E121B]">{card.title}</h3>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-100 text-[#222530] font-bold flex items-center justify-center text-sm font-bold">
            {card.seller.avatarText}
          </div>
          <p className="text-sm text-gray-800">{card.seller.name}</p>
          <div className="flex items-center ml-2 space-x-1">
            {card.badges.map((badge, index) => (
              <img
                key={index}
                src="./GoogleLogo.png"
                alt="badge"
                className="w-4 h-4"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <span className="text-yellow-500">★</span>
            <span>{card.rating}</span>
            <span className="text-gray-500">({card.reviewsCount})</span>
          </div>
          <div className="text-black font-semibold"><span className="text-[8px]">$</span>{card.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
