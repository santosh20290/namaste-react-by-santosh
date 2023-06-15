// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
    React.createElement("h1", {}, "Hi i am H1 tag"), 
    React.createElement("h2", {}, "Hi i am H2 tag"),
]),
React.createElement("div", {id:"child2"}, [
    React.createElement("h1", {}, "Hi i am H1 tag"), 
    React.createElement("h2", {}, "Hi i am H2 tag"),
]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);