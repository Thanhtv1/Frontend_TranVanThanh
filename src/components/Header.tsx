import React from "react";
import ImageWithInfo from "./ImageWithInfo";
import { logoImage } from "../utils/image";

const Header: React.FC = () => {
  return (
    <header className="py-2 min-h-11 w-full shrink-0">
      <div className="max-w-4xl py-0.5 h-full mx-auto flex justify-between items-center">
        <img
          className="w-12 h-12 ml-12 object-cover rounded-full"
          src={logoImage}
          alt=""
        />
        <ImageWithInfo />
      </div>
    </header>
  );
};

export default Header;
