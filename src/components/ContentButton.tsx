import React from "react";

interface Props {
  name: string;
  styleString?: string;
}
const ContentButton: React.FC<Props> = ({ name, styleString }) => {
  return <button className={`min-w-[215px] py-2 border-b-[3px] text-white text-sm ${styleString}`}>{name}</button>
};

export default ContentButton;
