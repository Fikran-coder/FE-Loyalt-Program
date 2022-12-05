import React from "react";
import { Banner, Navbar, NavbarDashboard, Product, Footer } from "@components";

const Dashboard = () => {
  return (
    <div>
      <NavbarDashboard />
      <Navbar />
      <Banner />
      <Product />
      <Footer />
    </div>
  );
};

export default Dashboard;
