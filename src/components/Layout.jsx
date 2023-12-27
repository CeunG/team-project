import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Middles/Sidebar";
import "../assets/css/style.css";

function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default Layout;
