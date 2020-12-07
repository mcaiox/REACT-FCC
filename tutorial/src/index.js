import React from "react"; // ES6 Modules imported from node modules
import ReactDom from "react-dom";

//Capitalised function names tells React this is not a regular function but rather a function component

//Stateless functional component -> must return JSX
function Greeting() {
  return (
    //can only a single element -> wrap everything in a div
    //user camelCase for html attributes
    //dont use divs, use appropiate names and dont place everything as a div -> follow html semantics
    <div>
      <h4>Hello World</h4>
      <ul>
        <li>
          <a href="#">Hello world</a>
          <button>Button</button>
        </li>
      </ul>
    </div>
  );
}

//what happens under the hood -> mshould return html doc syntax -> makes it easier/ readable.
// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// };

ReactDom.render(<Greeting />, document.getElementById("root")); //Render(what, where to)  //Render Greeting component and to root in Index.html which has  <div id="root"></div> in <body>
