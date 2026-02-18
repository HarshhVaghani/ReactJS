import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import WithAuth from "./components/WithAuth";
import { useState } from "react";
import Home from "./components/Home";

// const ProtectedDashboard = WithAuth(Dashboard)
const ProtectedHome = WithAuth(Home)

const App = () => {

  const [isLoggedIn , setIsLoggedIn] = useState(true)

  return (
    <>
      {
        isLoggedIn ? (
          <ProtectedHome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn}/>
        )
      }
    </>
  );
};

export default App;
