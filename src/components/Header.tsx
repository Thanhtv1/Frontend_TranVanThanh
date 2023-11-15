import React from "react";
import ImageWithInfo from "./ImageWithInfo";
import { imageLogoSample } from "../utils/image";

const Header: React.FC = () => {
  return (
    <header className="py-2 min-h-11 w-full shrink-0">
      <div className="max-w-4xl h-full mx-auto flex justify-between items-center">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src={imageLogoSample}
          alt="img"
        />
        <ImageWithInfo />
      </div>
    </header>
  );
};

export default Header;
