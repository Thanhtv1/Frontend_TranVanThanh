import React from "react";
import { avatarImage } from "../utils/image";

const ImageWithInfo: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-2.5">
      <div className="flex flex-col">
        <p className="text-gray-400 text-xs italic">Handicrafted by</p>
        <p className="text-right text-[10px]"> Jim HLS</p>
      </div>
      <img
        className="w-12 h-12 object-cover rounded-full"
        src={avatarImage}
        alt="img"
      />
    </div>
  );
};

export default ImageWithInfo;
