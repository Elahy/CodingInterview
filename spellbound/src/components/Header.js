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
          <p className="text-9xl px-40 py-20 font-extrabold bg-white mix-blend-screen">
            THE RISE OF BENGAL TIGER
          </p>
        </div>
        <div className="bg-white p-10">
          <button>SCROLL</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
