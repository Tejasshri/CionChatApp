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

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("http://192.168.1.37:6001/users");
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        }
      } catch (error) {
        console.log(error.message, "Somthing went wrong");
      }
    })();
  }, []);

  return (
    <ReactContext.Provider value={{ users, setUsers }}>
      <ChatApp />
    </ReactContext.Provider>
  );
}
