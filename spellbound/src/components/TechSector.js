import React from "react";
import ReactPlayer from "react-player";

function TechSector() {
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
            It's Time for Investors to Notice Bangladesh's{" "}
            <h1 className="bg-red-500 inline px-2 pb-2 text-white">
              Innovative Tech Sector
            </h1>{" "}
          </h1>
        </div>
        <div>
          <p className="text-2xl ml-3 mb-16 font-">
            Bangladesh has a young population, a government pushing for
            digitalization and a rapidly expanding startup scene, creating a
            range of opportunities. Foreign investors are tapping into the huge
            potential for growth.
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
            Investment is flowing into Bangladesh’s startup companies, attracted
            by a young workforce, advancing digital policies and the potential
            for exponential expansion.
          </p>
          <p className="text-xl ml-3 my-12 font-light">
            A combined $380 million in disclosed investments headed to more than
            50 startups in 2021, according to Dhaka-based news outlet Future
            Startup, and many others completed undisclosed deals. Dhaka-based
            IOT company Bondstein Technologies Limited, for instance, secured a
            $1 million investment from a group led by Runner Trading Limited. It
            will use the funds for R&D and expansion. While this illustrates
            impressive momentum, the scale of investment still leaves Bangladesh
            behind some of its emerging-market peers, making the opportunities
            for growth all the more real.
          </p>
          <p className="text-xl ml-3 my-12 font-light">
            Rapid expansion of this sector is set to continue, underpinned by
            fast economic growth across the country and a recovery from the
            worst of the Covid-19 pandemic. Even though there are still some
            challenges to overcome, the opportunities are myriad and progress so
            far is good. E-commerce, healthcare, logistics, education, travel
            and fintech are attracting the most investment, according to Future
            Startup.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default TechSector;
