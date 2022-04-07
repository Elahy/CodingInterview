import React from "react";
import FutureCards from "./components/FutureCards";
import Congestion from "./components/Congestion";
import Connectivity from "./components/Connectivity";
import Emerging from "./components/Emerging";
import Ending from "./components/Ending";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import Header from "./components/Header";
import MegaProjects from "./components/MegaProjects";
import PadmaBridge from "./components/PadmaBridge";
import PMQuote from "./components/PMQuote";
import TextinGreen from "./components/TextinGreen";
import Videos from "./components/Videos";
import Ports from "./components/Ports";
import Tunnels from "./components/Tunnels";
import Powering from "./components/Powering";

function Page() {
  return (
    <>
      <Header />
      <Videos />
      <TextinGreen />
      <FutureCards />
      <PMQuote />
      <MegaProjects />
      <PadmaBridge />
      <Connectivity />
      <Congestion />
      <Tunnels />
      <Ports />
      <Powering />
      <Goals />
      <Emerging />
      <Ending />
      <Footer />
    </>
  );
}

export default Page;
