import React from "react";

function PadmaBridge() {
  return (
    <div className="bg-[url('./img/padmabridge-1.webp')]">
      <div className="h-screen grid grid-cols-2">
        <div className="mr-24 ml-40 grid grid-cols-2">
          <div></div>
          <div className="mt-72">
            <h1 className="text-white text-7xl text-right font-bold">
              The Padma Bridge
            </h1>
          </div>
        </div>
        <div>
          <div className="ml-32 mt-96 grid grid-cols-2">
            <div>
              <p className="text-white text-2xl font-semibold">
                Spanning more than
              </p>
              <h1 className="text-white text-7xl font-bold">3.7 miles</h1>
              <p className="text-white text-2xl font-semibold">
                to accelerate trade flows between Bangladesh and bustling South
                Asia.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PadmaBridge;
