import "./App.css";
import Com_Main from "./components/Com_Main";
import { createContext } from "react";

// createContext , Provider , Consumer 

const data = createContext()
const data1 = createContext()

const App = () => {

  const user = {
    name:"Alice",
    gender:"Male"
  }

  const profile = {
    name:"Aliana",
    gender:"Female"
  }

  return (
    <>
      <data.Provider value={user}>
        <data1.Provider value={profile}>
        <Com_Main/>
        </data1.Provider>
      </data.Provider>
    </>
  );
};

export default App;
export {data , data1}
