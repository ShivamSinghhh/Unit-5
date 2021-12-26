
import { add, mults } from "./calc";
import("./index.css");

// import image from "./logo.jpg"

console.log(add(100, 4));
console.log(mults(20, 3))   

const h1 = document.createElement("h1");
h1.innerText = "Hello Webpack";
h1.classList.add("redcolor");

document.getElementById("root").appendChild(h1)