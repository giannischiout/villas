'use client'
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Intro from "./Intro";
import SectionThree from "./SectionThree";
import { SectionTwo, SectionFour, SectionFive, SectionSix} from "./SectionThree";
import VillasPresentation from "./VillasPresentation";
const Home = () => {

  return (
    <>
        <div>
          {/* <Intro /> */}
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <VillasPresentation />
        </div>
    </>
  );
};
export default Home;