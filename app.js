/*
*
*
*<  div id="parent">
*       <div id="child">
*         <h1>I'm h1 tag</h1>
*       </div>
*</div>
*ReactElement(Object)=>HTML(Browser Understands)
*
*/

act.createElement(
        "div",
      
const parent=React.createElement(
    "div",
    {id:"parent"},
    [Re  {id:"child",},
        [React.createElement("h1",{},"I will be the best h1 tag"),
         React.createElement("h2",{},"I will be the best h2 tag")
        ]),React.createElement(
            "div",
            {id:"child2",},
            [React.createElement("h1",{},"I will be the best h1 tag"),
             React.createElement("h2",{},"I will be the best h2 tag")
            ])]
);

//JSX to remove this ugly structure we have JSX.


const heading = React.createElement("h1",{id :"heading"},"I am using React to print world")
const root = ReactDOM.createRoot(document.getElementById("root"));
        
root.render(parent);
