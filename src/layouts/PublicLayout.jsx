import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* <Header /> */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
