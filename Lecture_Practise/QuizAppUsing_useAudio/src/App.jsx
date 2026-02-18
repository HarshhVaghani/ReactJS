import "./App.css";
import UseRef1 from "./components/UseRef1";
import UseAudio from "./components/UseAudio";
import Quiz from "./components/Quiz";
import UseRefNew from "./components/UseRefNew";

const App = () => {
  return (
    <>
      <h1 className="heading">Quiz App in ReactJs</h1>
      {/* <Quiz /> */}
      <UseRefNew/>
    </>
  );
};

export default App;
