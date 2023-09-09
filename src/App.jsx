import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="app-container">

      <Home />
      <Outlet />
    </div>
  );
}

export default App;
