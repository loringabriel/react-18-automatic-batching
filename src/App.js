import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

let renderCount = 0;

function App() {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);

  renderCount += 1;
  console.log("Rendered => Total Renders: ", renderCount);

  const handleOnClickAsync = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      setCount(count + 1);
      setLoading(false);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleOnClickAsync}>Click me</button>
      </header>
    </div>
  );
}

export default App;
