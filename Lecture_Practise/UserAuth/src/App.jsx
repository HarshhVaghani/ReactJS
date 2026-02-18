import "./App.css";
import Layout from "./pages/Layout";
import { AuthProvider } from "./context/authContext";
import { TaskProvider } from "./context/taskContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <Layout />
        </TaskProvider>
      </AuthProvider>
    </>
  );
};

export default App;
