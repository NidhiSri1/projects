import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { Specific } from "./components/Specific";
import { AddFlat } from "./components/AddFlat";
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/specific" element={<Specific />} />
                <Route path="/addFlat" element={<AddFlat />} />
            </Routes>
        </div>
    );
}

export default App;
