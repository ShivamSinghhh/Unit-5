
import { add, mults } from "./calc";
import("./index.css");

import React from "react";
import ReactDom from "react-dom";

// import image from "./logo.jpg"

console.log(add(100, 4));
console.log(mults(20, 3))   

const h1 = document.createElement("h1");
h1.innerText = "Hello Webpack shivafgfgm";
h1.classList.add("greencolor");






document.getElementById("root").appendChild(h1)
