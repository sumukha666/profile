import * as React from "react";
import AppComp from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./public/styles/styles.css";
function App() {
  return (
    <Router>
      <AppComp />
    </Router>
  );
}

export default App;
