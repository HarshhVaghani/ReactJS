import "./App.css";
import { useState } from "react";
import Reducer from "./components/Reducer";

const App = () => {

  const [count , setCount] = useState(0)

  return (
    <>
    {/* <h1 className="heading">This is App Counter useing useStatae</h1>
      <span>
        {count}
      </span>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button> */}
      <Reducer/>
    </>
  );
};

export default App;
