import React from "react";
import "./assets/main.css";
import Header from "./components/header/Header";
import Card from "./components/card-container/Card";

function App() {
  return (
    <>
    <Header />
    <div className="container m-auto px-8">
        <Card />
    </div>
    </>
  );
}

export default App;
