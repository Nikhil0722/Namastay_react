/*
*
* ReactElement(Object) => HTML (Browser Understands)
*
*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement("h1", {}, "I will be the best h1 tag"),
                React.createElement("h2", {}, "I will be the best h2 tag")
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement("h1", {}, "I will be the best h1 tag"),
                React.createElement("h2", {}, "I will be the best h2 tag")
            ]
        )
    ]
);

// JSX can simplify this structure, but here we demonstrate how it works with React.createElement.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
