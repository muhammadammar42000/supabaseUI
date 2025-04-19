import React from "react";
import {
  FiHome,
  FiShoppingBag,
  FiMessageSquare,
  FiGift,
  FiHelpCircle,
  FiEdit,
} from "react-icons/fi";
import { FaTwitch } from "react-icons/fa";
import { BsTwitterX, BsGoogle } from "react-icons/bs";

const menuItems = [
  { icon: FiHome, label: "Home" },
  { icon: FiShoppingBag, label: "Order" },
  { icon: FiMessageSquare, label: "Chat" },
  { icon: FiGift, label: "Bonus" },
  { icon: FiHelpCircle, label: "Help Center" },
];

const ProfileCard = () => {
  return (
    <div className="w-[300px] rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
      {/* Profile Header */}
      <div className="flex flex-col items-center">
        {/* Avatar with Online Status */}
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF4D6] text-xl font-semibold text-[#1E1E1E]">
            SW
          </div>
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
        </div>

        {/* Name and Rating */}
        <div className="mt-3 text-center">
          <h2 className="text-lg font-semibold text-gray-600">Cleve Music</h2>
          <div className="mt-1 flex items-center justify-center space-x-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm font-medium text-gray-600">4.9 (125)</span>
          </div>
        </div>

        {/* Google Badges */}
        <div className="mt-2 flex space-x-2">
          <div className="flex items-center space-x-1 rounded-full px-2 py-1">
            {/* <BsGoogle className="h-4 w-4" /> */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00015 11.4999C9.93325 11.4999 11.5003 9.93274 11.5003 7.99964C11.5003 6.06654 9.93325 4.49942 8.00015 4.49942C6.06704 4.49942 4.5 6.06654 4.5 7.99964C4.5 9.93274 6.06704 11.4999 8.00015 11.4999Z"
                fill="white"
              />
              <path
                d="M4.96887 9.75055L1.93811 4.5011C1.32358 5.56517 1 6.77226 1 8.0011C1 9.22994 1.32343 10.437 1.93789 11.5011C2.55235 12.5652 3.43615 13.4488 4.50037 14.063C5.56459 14.6772 6.77182 15.0004 8.00059 15L11.0313 9.75055V9.74974C10.7244 10.2821 10.2826 10.7242 9.75055 11.0316C9.21848 11.339 8.61485 11.5009 8.00036 11.501C7.38588 11.5011 6.7822 11.3394 6.25004 11.0322C5.71788 10.7249 5.27602 10.2829 4.96887 9.75069V9.75055Z"
                fill="#229342"
              />
              <path
                d="M11.031 9.75033L8.00027 14.9998C9.22904 15 10.4362 14.6766 11.5003 14.0623C12.5645 13.4479 13.4481 12.5642 14.0625 11.5C14.6767 10.4358 15 9.22862 14.9998 7.99985C14.9996 6.77109 14.6759 5.564 14.0612 4.5H7.99976L7.99902 4.50052C8.61351 4.50022 9.21724 4.66173 9.7495 4.9688C10.2818 5.27592 10.7238 5.71767 11.0311 6.24982C11.3384 6.78195 11.5002 7.38562 11.5002 8.00012C11.5002 8.61462 11.3384 9.21829 11.031 9.7504L11.031 9.75033Z"
                fill="#FBC116"
              />
              <path
                d="M7.99998 10.7714C9.53035 10.7714 10.7709 9.53082 10.7709 8.00037C10.7709 6.46993 9.53035 5.2294 7.99998 5.2294C6.4696 5.2294 5.229 6.47 5.229 8.00037C5.229 9.53075 6.4696 10.7714 7.99998 10.7714Z"
                fill="#1A73E8"
              />
              <path
                d="M7.99995 4.50022H14.0614C13.4472 3.436 12.5636 2.5522 11.4994 1.93774C10.4353 1.32333 9.2282 0.999907 7.99944 1C6.77067 1.00007 5.56358 1.32366 4.49958 1.93826C3.43555 2.55283 2.55207 3.43671 1.93799 4.50103L4.96875 9.75048L4.96956 9.75092C4.66206 9.21889 4.50006 8.61527 4.49987 8.00077C4.49968 7.38627 4.66129 6.78255 4.96846 6.25033C5.27557 5.71811 5.71755 5.27614 6.24969 4.96894C6.78184 4.66175 7.38557 4.5 8.0001 4.50015L7.99995 4.50022Z"
                fill="#E33B2E"
              />
            </svg>
            <span className="text-xs">Google</span>
          </div>
          <div className="flex items-center space-x-1 rounded-full px-2 py-1">
            {/* <BsGoogle className="h-4 w-4" /> */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00015 11.4999C9.93325 11.4999 11.5003 9.93274 11.5003 7.99964C11.5003 6.06654 9.93325 4.49942 8.00015 4.49942C6.06704 4.49942 4.5 6.06654 4.5 7.99964C4.5 9.93274 6.06704 11.4999 8.00015 11.4999Z"
                fill="white"
              />
              <path
                d="M4.96887 9.75055L1.93811 4.5011C1.32358 5.56517 1 6.77226 1 8.0011C1 9.22994 1.32343 10.437 1.93789 11.5011C2.55235 12.5652 3.43615 13.4488 4.50037 14.063C5.56459 14.6772 6.77182 15.0004 8.00059 15L11.0313 9.75055V9.74974C10.7244 10.2821 10.2826 10.7242 9.75055 11.0316C9.21848 11.339 8.61485 11.5009 8.00036 11.501C7.38588 11.5011 6.7822 11.3394 6.25004 11.0322C5.71788 10.7249 5.27602 10.2829 4.96887 9.75069V9.75055Z"
                fill="#229342"
              />
              <path
                d="M11.031 9.75033L8.00027 14.9998C9.22904 15 10.4362 14.6766 11.5003 14.0623C12.5645 13.4479 13.4481 12.5642 14.0625 11.5C14.6767 10.4358 15 9.22862 14.9998 7.99985C14.9996 6.77109 14.6759 5.564 14.0612 4.5H7.99976L7.99902 4.50052C8.61351 4.50022 9.21724 4.66173 9.7495 4.9688C10.2818 5.27592 10.7238 5.71767 11.0311 6.24982C11.3384 6.78195 11.5002 7.38562 11.5002 8.00012C11.5002 8.61462 11.3384 9.21829 11.031 9.7504L11.031 9.75033Z"
                fill="#FBC116"
              />
              <path
                d="M7.99998 10.7714C9.53035 10.7714 10.7709 9.53082 10.7709 8.00037C10.7709 6.46993 9.53035 5.2294 7.99998 5.2294C6.4696 5.2294 5.229 6.47 5.229 8.00037C5.229 9.53075 6.4696 10.7714 7.99998 10.7714Z"
                fill="#1A73E8"
              />
              <path
                d="M7.99995 4.50022H14.0614C13.4472 3.436 12.5636 2.5522 11.4994 1.93774C10.4353 1.32333 9.2282 0.999907 7.99944 1C6.77067 1.00007 5.56358 1.32366 4.49958 1.93826C3.43555 2.55283 2.55207 3.43671 1.93799 4.50103L4.96875 9.75048L4.96956 9.75092C4.66206 9.21889 4.50006 8.61527 4.49987 8.00077C4.49968 7.38627 4.66129 6.78255 4.96846 6.25033C5.27557 5.71811 5.71755 5.27614 6.24969 4.96894C6.78184 4.66175 7.38557 4.5 8.0001 4.50015L7.99995 4.50022Z"
                fill="#E33B2E"
              />
            </svg>

            <span className="text-xs">Google</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="mt-6 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center space-x-3 rounded-lg px-3 py-2.5 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* About Section */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-600">About</h3>
          <button className="rounded-full p-1 hover:bg-gray-100">
            <FiEdit className="h-4 w-4 text-gray-400" />
          </button>
        </div>
        <p className="mt-2 text-[12px] text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer too
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-2 flex space-x-2">
        <button className="rounded-lg p-2 text-[#6441A5] hover:bg-gray-100">
          <FaTwitch className="h-5 w-5" />
        </button>
        <button className="rounded-lg p-2 text-gray-700 hover:bg-gray-100">
          <BsTwitterX className="h-5 w-5" />
        </button>
        <button className="rounded-lg p-2 text-[#DB4437] hover:bg-gray-100">
          <BsGoogle className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
