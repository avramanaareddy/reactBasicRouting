import React from "react";
import { Route } from "react-router-dom";
import "./styles.css";
import Home from "./Home.js";
export default function App() {
  return (
    <div className="App">
      <h1>This is to learn routing</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/airports">Airports</a>
        </li>
        <li>
          <a href="/cities">Cities</a>
        </li>
      </ul>
      <Route path="/" component={Home} />
    </div>
  );
}
