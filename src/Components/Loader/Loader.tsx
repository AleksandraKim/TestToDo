import React,{useState,useEffect, CSSProperties } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const override: CSSProperties = {
  position:"absolute",
  left: "46%",
  top:"40%",
  borderColor: "white",
};

function Loader() {
 
return (<ClockLoader
          cssOverride={override}
          size={120}
          aria-label="Loading Spinner"
          data-testid="loader"
      />)}

export default Loader;
