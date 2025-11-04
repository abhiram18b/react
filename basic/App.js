/*
    <div id="parent">
        <div id="child">
            <h1>I am an h1 tag</h1>
        </div>
    </div>


*/
const parent = React.createElement("div",{id:"parent"},[
        //1
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),
        //2
        React.createElement("div",{id:"child-2"},[
            React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")])
    ]
)

const heading = React.createElement("h1",{id:"heading"},"Hello React");

// console.log(heading)
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(parent)
