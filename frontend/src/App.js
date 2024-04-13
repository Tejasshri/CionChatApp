import React, { useEffect, useState } from "react";

// Pages
import ChatApp from "./pages/ChatApp";

// Componnets
import Navbar from "./components/Navbar";
import ContactsList from "./components/ContactsList";
import ChatSection from "./components/ChatSection";

//Context
import ReactContext from "./context/ReactContext";

// Styles in module
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);

  

  return (
    <ReactContext.Provider value={{ users, setUsers }}>
      <ChatApp />
    </ReactContext.Provider>
  );
}
