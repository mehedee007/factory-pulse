// App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/home/Landing"
import Login from "./pages/auth/Login";
import Notfound from "./layouts/Notfound";
import PublicLayout from "./layouts/PublicLayout";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PublicLayout />} >
          <Route index element={<Landing />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </AnimatePresence>

  );
}

export default App;
