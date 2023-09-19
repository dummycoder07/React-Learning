import React from 'react';
import ReactDOM from 'react-dom/client'

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "This is h1 Tags")
//   )
// );

const parent2 = React.createElement("div", { id: "parent2" }, [
  React.createElement(
    "div",~
    { id: "child1" },
    React.createElement("h1", {}, "This is h1-chind1 Tags"),
    React.createElement(
      "div",
      { id: "child2" },
      React.createElement("h1", {}, "This is h1-child2 Tags")
    )
  ),
]);

root.render(parent2);
