import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h1> Hello World</h1>
}
const num = 10000
const HeadingComponent = () => (
  <div>
    <Title />
    {Title()}
    <Title></Title>
    {num}
    <h1>Hola World</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
