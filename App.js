import React from "react"
import {createRoot} from "react-dom/client"
const parent = React.createElement("div",{id:"parent"},[
        //1
        React.createElement("div",{id:"child",key:"child"},[
            React.createElement("h1",{key:"a1"},"I am h1 tag"),React.createElement("h2",{key:"a2"},"I am h2 tag")]),
        //2
        React.createElement("div",{id:"child-2",key:"child-2"},[
            React.createElement("h1",{key:"b1"},"I am h1 tag"),React.createElement("h2",{key:"b2"},"I am h2 tag")])
    ]
)
const heading = React.createElement("h1",{id:"heading"},"Hello React")
console.log(heading)

const root = createRoot(document.getElementById("root"))

root.render(parent)