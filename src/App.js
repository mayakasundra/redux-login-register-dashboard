import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRouter from "./router/PrivateRouter";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
}

export default App;
