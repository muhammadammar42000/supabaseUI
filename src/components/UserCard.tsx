import Image from "next/image";

export default function UserCard() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-xl p-4 space-y-4">
      <div className="flex items-center space-x-4">
        {/* Profile Image (You can replace the src with your own image URL or Next.js Image component */}
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image src="/user.png" alt="Cleve" width={48} height={48} />
        </div>
        <div>
          <div className=" text-[14px] font-medium  text-[#222530] flex items-center">
            Cleve Music
            <span className="text-yellow-500 ml-2">★</span>
            <span className="ml-1 text-sm text-gray-600 text-[#525866]">4.9 (125)</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
            <span className="flex items-center gap-1">
              <Image src="/GoogleLogo.png" alt="G" width={14} height={14} />
              Salary
            </span>
            <span className="flex items-center gap-1">
              <Image src="/GoogleLogo.png" alt="G" width={14} height={14} />
              Work
            </span>
            <span className="flex items-center gap-1">
              <Image src="/GoogleLogo.png" alt="G" width={14} height={14} />
              Specia
            </span>
          </div>
        </div>
      </div>

      <p className="text-[14px] text-gray-400">
        Passionate about delivering high-quality audio mixing and editing. Let’s
        create something
      </p>

      <div className="flex flex-wrap gap-2">
        {["Mixing", "Singing", "Jazz", "Hip pop", "K pop"].map((tag) => (
          <span
            key={tag}
            className="border-1 border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
