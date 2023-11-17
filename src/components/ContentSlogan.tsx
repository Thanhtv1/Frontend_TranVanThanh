import React from "react";

const Slogan: React.FC = () => {
  const bgColor = "#26B261";
  return (
    <div style={{ backgroundColor: bgColor }} className="py-16 font-semibold">
      <div className="h-full mx-2 text-white flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl">A joke a day keeps the doctor away</h1>
        <p className="text-xs">
          If you joke wrong way, your teeth have to pay. (Serious)
        </p>
      </div>
    </div>
  );
};

export default Slogan;
