import React from "react";
import ReactPlayer from "react-player";

function MegaProjects() {
  return (
    <div className="grid grid-cols-4">
      <div className="flex">
        <div className="mt-40 h-1/2 w-20 bg-bd-green rotate-45"></div>
        <div className="mt-64 h-96 w-10 bg-red-500 rotate-45"></div>
      </div>
      <div className="col-span-2 mt-24">
        <div className="mb-10">
          <p className="text-5xl ml-3 font-bold text-gray-400">01</p>
          <h1 className="text-6xl ml-3 font-bold">
            How{" "}
            <h1 className="bg-red-500 inline px-2 pb-2 text-white">
              Mega-Infrastructure
            </h1>{" "}
            Projects Will Power Bangladesh’s Economic Growth
          </h1>
        </div>
        <div>
          <p className="text-2xl ml-3 mb-16 font-">
            Bangladesh is focused on infrastructure to attract investment and
            supercharge economic growth. With megaprojects set to improve
            transport, shipping, communication and energy, the stage is set for
            a bright future.
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
          <p className="text-xl ml-3 my-12">
            Spanning more than six kilometers (3.7 miles) and linking the
            southwest of the country to the north and east, the Padma
            Multipurpose Bridge is a symbol of how far Bangladesh has come as a
            nation and of its ambition for the future.
          </p>
          <p className="text-xl ml-3 my-12">
            The double-decker steel structure, which is due to open this year,
            was built to withstand monsoons, flooding and earthquakes. It will
            carry rail and road vehicles over the Padma River, as well as
            utilities including gas pipes and telecommunication lines, opening
            avenues for trade and boosting economic growth.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default MegaProjects;
