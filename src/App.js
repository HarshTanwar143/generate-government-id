import "./App.css";
import {  BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Pan from "./pages/Pan";




function App() {


  return (
    <div className="w-screen min-h-screen flex flex-col ">

      <Navbar/>
      <Main />

      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Pan" element={<Pan />} />

      </Routes>


    </div>
  );
}

export default App;
