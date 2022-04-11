import React from "react";

function PMQuote() {
  return (
    <div className="bg-[url('./img/PMQ-scenery.webp')]">
      <div className="h-screen bg-black-rgba grid grid-cols-2 ">
        <div className="h-full">
          <img
            className="bg-bd-green rounded-full mt-60 ml-60"
            src="./img/hasina-unicef.webp"
            alt="PM hasina"
          />
        </div>
        <div className="h-full">
          <h1 className="text-white mr-80 mt-56 mb-8 text-4xl font-bold">
            We have set our vision 2021. To emerge as a middle income, knowledge
            driven digital economy. Then comes our vision 2041 to be a developed
            one. These are to realize the dream of our Father of the nation,
            Bangabandhu Sheikh Mujibur Rahman To build a sonar bangla, The Land
            of Golden Bengal.
          </h1>
          <p className="text-white mr-80 ml-80 text-2xl text-right">
            - H.E. Sheikh Hasina,
          </p>
          <p className="text-white mr-80 ml-72 text-2xl text-right">
            Prime Minister of The People's Republic of Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
}

export default PMQuote;
