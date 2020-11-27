import React from "react"; // ES6 Modules imported from node modules
import ReactDom from "react-dom";

//Capitalised function names tells React this is not a regular function but rather a function component
function Greeting() {
  return <h4>Greetings! This is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root")); //Render(what, where to)  //Render Greeting component and to root in Index.html which has  <div id="root"></div> in <body>
