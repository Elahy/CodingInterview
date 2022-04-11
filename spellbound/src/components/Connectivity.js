import React from "react";

function Connectivity() {
  return (
    <div>
      <div className="grid grid-cols-4 mb-16">
        <div className="flex">
          <div className="mt-40 h-1/2 w-20 bg-bd-green rotate-45"></div>
          <div className="mt-64 h-96 w-10 bg-red-500 rotate-45"></div>
        </div>
        <div className="col-span-2 mt-24">
          <div className="mb-10 grid grid-cols-2">
            <div className="text-6xl ml-3 font-bold text-bd-green">
              <h1>Investing in</h1> <h1>Connectivity</h1>
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-5">
            <div className="col-span-3">
              <p className="text-xl ml-3 mb-16 font-">
                Bangladesh Vision 2041, a national strategic plan to accelerate
                the country's socio-economic growth, cites stronger and
                better-quality infrastructure as a core need, seeing
                opportunities for significant investment in areas like ports,
                roads and transportation, where Bangladesh lags other
                similar-stage Asian economies.
              </p>
              <p className="text-xl ml-3 mb-16 font-">
                To fuel the country's rapid economic growth, Bangladesh is
                transforming its infrastructure through mega projects spanning
                new ports, rail links and bridges. The Asian Development Bank
                notes that increasing capital flows is critical to improving the
                competitiveness of domestic industries and overall economic
                efficiency – and Bangladesh is doing just that.
              </p>
            </div>
            <div className="col-span-2 bg-[url('./img/bangladesh-40-billion.webp')] rounded-xl mx-8 h-full">
              <div className="text-white p-9">
                <h1 className="text-center text-4xl font-seminold">
                  Bangladesh's
                </h1>
                <h1 className="text-center text-5xl font-bold">$40 Billion</h1>
                <p className="text-xl my-4">
                  commitment to building world-class infrastructure will
                  accelerate trade and spur new markets.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl my-8">
              The government is addressing the need for quality infrastructure,
              in particular transport infrastructure, with sustained investments
              and public-private partnerships that will help fill funding needs
              of around $10 billion a year. Key projects will boost trade,
              industry, transport and energy capacity, fueling Bangladesh's rise
              to high-income status.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Connectivity;
