import React from "react";
import { Player } from "video-react";

function Videos() {
  return (
    <div className="bg-light-green">
      <div className="flex justify-center">
        <a href="https://roadshow.sec.gov.bd/">
          <img
            className="m-2 h-36"
            src="./img/final-besc-campaign-logo.webp"
            alt=""
          />
        </a>
        <a href="https://roadshow.sec.gov.bd/">
          <img className="m-2 h-32" src="./img/bsec-logo-2.webp" alt="" />
        </a>
      </div>
      <div>
        <h1 className="text-center text-9xl">
          The Future of Opportunity in bangladesh
        </h1>
      </div>
      <div>
        <Player
          playsInline
          // poster="/assets/poster.png"
          src="https://media-s3-us-east-1.ceros.com/bloomberg/videos/2022/03/17/bf8dd94cece1f6afa7a453439475f380/hls/file-240k-00001.ts"
        />
      </div>
    </div>
  );
}

export default Videos;
