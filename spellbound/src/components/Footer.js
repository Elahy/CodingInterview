import React from "react";

function Footer() {
  return (
    <div className="m-20 bg-transparent">
      <h1 className="mt-20 text-center text-4xl font-semibold">
        Find out more
      </h1>
      <div className="flex justify-center">
        <div className="mx-8 my-8">
          <a href="https://roadshow.sec.gov.bd/">
            <img src="./img/final-besc-campaign-logo.webp" alt="" />
          </a>
        </div>
        <div className="mx-8 my-8">
          <a href="https://roadshow.sec.gov.bd/">
            <img src="./img/bsec-logo-2.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
