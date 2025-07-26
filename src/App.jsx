import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 19;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log("clicked", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}> Add value {counter}</button>
      <button onClick={removeValue}>Remove value{counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
