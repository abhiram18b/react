import React from "react";
import { createRoot } from "react-dom/client";

// const parent = React.createElement("div",{id:"parent"},[
//         //1
//         React.createElement("div",{id:"child",key:"child"},[
//             React.createElement("h1",{key:"a1"},"I am h1 tag"),React.createElement("h2",{key:"a2"},"I am h2 tag")]),
//         //2
//         React.createElement("div",{id:"child-2",key:"child-2"},[
//             React.createElement("h1",{key:"b1"},"I am h1 tag"),React.createElement("h2",{key:"b2"},"I am h2 tag")])
//     ]
// )
const heading = React.createElement("h1", { id: "heading" }, "Hello React");
console.log(heading);

//jsx html like element
const title = (
  <h1 className="head" tabIndex={5}>
    Hello React Using Title JSX
  </h1>
);
const number = 10000;

const HeadingComponent = () => (
  <div id="heading">
    {title}
    <h1 className="heading">Hello React from HeadingComponent</h1>
    <h2>{number}</h2>
  </div>
);

const root = createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
