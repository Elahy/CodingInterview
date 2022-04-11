import React from "react";

function Header() {
  return (
    <div className="bg-[url('./img/tophead-img.webp')]">
      <div className="grid grid-cols-2 h-full w-full bg-black-rgba animate">
        <div></div>
        <div className="h-full">
          <div className="bg-bd-green h-20 w-full"></div>
          <div className="">
            <p className="text-10xl pl-36 pr-44 pt-24  font-bold bg-white mix-blend-screen">
              THE RISE OF BENGAL TIGER
            </p>
          </div>
          <div className="bg-white px-40 py-16">
            <button className="bg-red-500 text-white font-semibold py-4 px-8 rounded">
              SCROLL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
