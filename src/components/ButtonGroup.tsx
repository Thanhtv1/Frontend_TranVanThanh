import React from "react";
import ContentButton from "./ContentButton";

const ButtonGroup: React.FC = () => {
  const buttonBlue = "border-b-[#1C69C0] bg-[#2C7EDB]";
  const buttonGreen = "border-b-[#19984E] bg-[#29B363]";
  return (
    <div className="max-w-lg border-t border-gray-200 flex justify-center gap-6 pt-8 pb-14 mx-auto">
      <ContentButton styleString={buttonBlue} name="This is Funny!" />
      <ContentButton styleString={buttonGreen} name="This is not funny." />
    </div>
  );
};

export default ButtonGroup;
