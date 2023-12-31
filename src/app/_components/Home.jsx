'use client'
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Intro from "./Intro";
import SectionThree from "./SectionThree";
import { SectionTwo, SectionFour, SectionFive} from "./SectionThree";
const Home = () => {

  return (
    <>
        <div>
          {/* <Intro /> */}
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
        </div>
    </>
  );
};
export default Home;