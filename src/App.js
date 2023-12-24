import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Category from "./Components/Category";
import PropList from "./Components/PropertyList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Search />
      <Category />
      <PropList />
    </div>
  );
}

export default App;
