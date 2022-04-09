import React from "react";

function Header() {
  return (
    <div
      style={{
        backgroundImage: "url(/img/tophead-img.webp)",
        // backgroundRepeat: "no-repeat",
        width: "100%",
        transition: "all 300ms ease-in-out",
      }}
      className="grid grid-cols-2 h-screen"
    >
      <div></div>
      <div className="h-full">
        <div className="bg-bd-green h-20 w-full"></div>
        <div className="">
          <p className="text-9xl px-40 pt-16  font-extrabold bg-white mix-blend-screen">
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
  );
}

export default Header;
