import React from "react";
import { imageLogoSample } from "../utils/image";

const ImageWithInfo: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="flex flex-col">
        <i className="text-gray-400 text-xs">Handicrafted by</i>
        <p className="text-right text-xs"> Jim HLS</p>
      </div>
      <img
        className="w-12 h-12 object-cover rounded-full"
        src={imageLogoSample}
        alt="img"
      />
    </div>
  );
};

export default ImageWithInfo;
