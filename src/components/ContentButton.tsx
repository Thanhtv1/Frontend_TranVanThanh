import React from "react";

interface Props {
  name: string;
  styleString?: string;
}
const ContentButton: React.FC<Props> = ({ name, styleString }) => {
  return <button className={`min-w-[210px] py-2 border-b-4 text-white ${styleString}`}>{name}</button>
};

export default ContentButton;
