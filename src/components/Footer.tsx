import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 border-t-2 border-gray-200 shrink-0">
      <div className="max-w-3xl mx-auto flex flex-col gap-3.5 text-center">
        <p className="text-xs leading-5 text-gray-400">
          This website is created as part of Hlsolutions program. The materials
          contained on this website are provided for general<br></br>
          information only and do not constitute any form of advice. HLS assumes
          no responsibility for the accuracy of any particular statement and
          <br></br>
          accepts no liability for any loss or damage which may arise from
          reliance on the information contained on this site.
        </p>
        <p className="text-xs"> Copyright 2021 HLS</p>
      </div>
    </footer>
  );
};

export default Footer;
