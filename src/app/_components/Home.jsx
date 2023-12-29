'use client'
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Intro from "./Intro";
const Home = () => {
  const ref = useRef(null);




  return (
    <>
        <div
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Intro />
        </div>
    </>
  );
};
export default Home;