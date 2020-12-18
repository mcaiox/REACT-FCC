import React from "react"; // ES6 Modules imported from node modules
import ReactDom from "react-dom";

//Capitalised function names tells React this is not a regular function but rather a function component
const element = <h1>Hello, world!</h1>; // This funny tag is neither a string or html, its JSX
//Stateless functional component -> must return JSX
function Greeting() {
  return (
    //can only a single element -> wrap everything in a div
    //user camelCase for html attributes
    //dont use divs, use appropiate names and dont place everything as a div -> follow html semantics
    <div>
      {element}
      <ul>
        <li>
          <h1>Welcome</h1>

          <hr></hr>
          <button onClick>Button</button>
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

// JSX Rules
// Returns a single element
// div, section ,article or Fragments(React.Fragments let you group a list of children without adding extra nodes to the DOM.)
// use camelCase for html attributes
// className instead of class
// close every element
// formatting
