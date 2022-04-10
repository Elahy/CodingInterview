import React from "react";

function FutureCards() {
  return (
    <div className="bg-light-green">
      <div>
        <h1 className="text-bd-green text-center py-40 text-bd font-semibold">
          Explore the Future of Opportunity in Bangladesh:
        </h1>
      </div>
      <div className="flex mx-80">
        <div className="bg-bd-green m-8 p-8 rounded w-60">
          <h1 className="text-white">Building the Future</h1>
          <p className="text-white">
            How Mega-Infrastructure Projects Will Power Bangladesh's Economic
            Growth
          </p>
          <button className="text-white p-4 rounded border-2">
            LEARN MORE
          </button>
          <img src="./img/menu-thumbnail-3.webp" alt="Infrastructure" />
        </div>
        <div className="bg-red-600 m-8 p-8 rounded w-60">
          <h1 className="text-white">Building the Future</h1>
          <p className="text-white">
            How Mega-Infrastructure Projects Will Power Bangladesh's Economic
            Growth
          </p>
          <button className="text-white p-4 rounded border-2">
            LEARN MORE
          </button>
          <img src="./img/menu-thumbnail-3.webp" alt="Infrastructure" />
        </div>
        <div className="bg-green-800 m-8 p-8 rounded w-60">
          <h1 className="text-white">Building the Future</h1>
          <p className="text-white">
            How Mega-Infrastructure Projects Will Power Bangladesh's Economic
            Growth
          </p>
          <button className="text-white p-4 rounded border-2">
            LEARN MORE
          </button>
          <img src="./img/menu-thumbnail-3.webp" alt="Infrastructure" />
        </div>
      </div>
    </div>
  );
}

export default FutureCards;
