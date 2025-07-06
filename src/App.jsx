// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./layouts/pages/LandingPage";
import Login from "./layouts/pages/auth/Login";
import Notfound from "./layouts/pages/Notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
