import React from "react";

export default function Nav() {


  return (
    <div className="font-[Poppins] bg-[#121E2C] h-[80px] p-3.5 sticky top-0 z-50 ">
      <div className="left flex items-center justify-between ">
        <img
          src="https://assets-global.website-files.com/638b48215fd2fd34538fa6bc/638c80735fd2fd0810a24fba_funngro-logo.svg"
          alt="logo"
          className="cursor-pointer"
          />

        <ul className="flex text-white space-x-3 text-[12px] md:text-[18px] md:space-x-7 ">
            <li className="hover:text-[#3EAF68] cursor-pointer">Teen</li>
            <li className="hover:text-[#3EAF68] cursor-pointer">Company</li>
            <li className="hover:text-[#3EAF68] cursor-pointer">Parent</li>
        </ul>


      </div>
    </div>
  );
}
