import React from "react";
import ContentSlogan from "./ContentSlogan";
import ContentText from "./ContentText";
import ButtonGroup from "./ButtonGroup";

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 w-full">
      <ContentSlogan />
      <ContentText />
      <ButtonGroup />
    </div>
  );
};

export default MainContent;
