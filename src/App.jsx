import { Outlet } from "react-router-dom";
import NetflixClone from "./components/NetflixClone";

import "./App.css";

function App() {
  return (
    <div className="app-container">

      <NetflixClone />
      <Outlet />
    </div>
  );
}

export default App;
