import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";
 function App() {
  const [showLogin, setShowLogin] = useState(true);
  const toggleForm = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div className="app-container">
      <h1>{showLogin ? "Login" : "Register"}</h1>
      {showLogin ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <RegistrationForm toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default App;
