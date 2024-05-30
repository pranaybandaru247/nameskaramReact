const rootRef = document.getElementById("root");
const headingJs = document.createElement("h1");
headingJs.innerHTML = "Hello world from JS";
rootRef.appendChild(headingJs);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading);
console.log(heading.props);
