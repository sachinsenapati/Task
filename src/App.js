// App.js
import "./App.css"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import OTPPage from "./components/OTPPage";
import AccountCreatedPage from "./components/AccountCreatedPage";
import Dashboard from "./components/Dashboard";
import AllPostPage from "./components/SinglePost";
import LastPage from "./components/CreatePost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        {/* Ensure that the path includes a parameter for the email */}
        <Route path="/otp-page/:email" element={<OTPPage />} />
        <Route path="/account-created" element={<AccountCreatedPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/all-post" element={<AllPostPage />} />
        <Route path="/create-post" element={<LastPage />} />
      </Routes>
    </Router>
  );
}

export default App;
