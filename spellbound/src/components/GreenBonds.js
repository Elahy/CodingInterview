import React from "react";
import ReactPlayer from "react-player";

function GreenBonds() {
  return (
    <div className="grid grid-cols-4">
      <div className="flex">
        <div className="mt-40 h-1/2 w-20 bg-bd-green rotate-45"></div>
        <div className="mt-64 h-96 w-10 bg-red-500 rotate-45"></div>
      </div>
      <div className="col-span-2 mt-24">
        <div className="mb-10">
          <p className="text-5xl ml-3 font-bold text-gray-400">02</p>
          <h1 className="text-6xl ml-3 font-bold">
            How{" "}
            <h1 className="bg-red-500 inline px-2 pb-2 text-white">
              Sustainable Finance
            </h1>{" "}
            and{" "}
            <h1 className="bg-red-500 inline px-2 pb-2 text-white">
              Green Bonds
            </h1>{" "}
            Will Power Bangladesh’s Future
          </h1>
        </div>
        <div>
          <p className="text-2xl ml-3 mb-16 font-">
            Bangladesh offers innovative finance products, sustainable
            opportunities and impressive economic growth. With its stock indices
            among Asia’s top performing and new developments including green
            sukuk, the future looks bright for investors.
          </p>
        </div>
        <div className="flex justify-center">
          <ReactPlayer
            url="./vid/file-240k-1.mp4"
            width="924px"
            height="517px"
            controls={true}
          />
        </div>
        <div className="mb-32">
          <p className="text-xl ml-3 my-12 font-light">
            Bangladesh has much to offer investors, including developing
            opportunities in sustainable finance and green investment, exposure
            to rapid economic expansion and returns from some of Asia’s
            top-performing equity markets.
          </p>
          <p className="text-xl ml-3 my-12 font-light">
            As one of the world’s fastest-growing economies, the fabric of the
            country is changing. That means more capital is needed to keep pace
            with a drive to finance building and infrastructure. At the same
            time, Bangladesh is one of the most vulnerable nations to climate
            change, with densely populated areas, low elevation and multiple
            rivers.
          </p>
          <p className="text-xl ml-3 my-12 font-light">
            This puts environmental concerns high up the agenda for
            policymakers, who are set on simplifying both the environment for
            investing in green assets and access for international investors.
            The central bank has put sustainable finance at the heart of its
            operations, and regulations are evolving to increase the size of
            capital markets and open them up.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default GreenBonds;
