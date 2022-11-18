import logo from './logo.svg';
import './App.css';
import React from "react";

// import ReactDOM from "react-dom";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
export default App;
