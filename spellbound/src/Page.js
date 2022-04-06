import React from "react";
import Ending from "./components/Ending";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PadmaBridge from "./components/PadmaBridge";
import TextinGreen from "./components/TextinGreen";
import Videos from "./components/Videos";

function Page() {
  return (
    <>
      <Header />
      <Videos />
      <TextinGreen />
      <PadmaBridge />
      <Ending />
      <Footer />
    </>
  );
}

export default Page;
