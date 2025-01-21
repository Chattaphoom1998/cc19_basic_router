//rfce
import React from "react";
import { Link, Outlet, Route, Routes } from "react-router";
import Layout from "../layouts/Layout";
import About from "../pages/About.Jsx";
import Home from "../pages/Home.Jsx";

function AppRoutes() {
  return (
    <div>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="login" element={<h1>Login page</h1>} />
          <Route path="register" element={<h1>Register</h1>} />
        </Route>

        {/* Private */}
        <Route path="admin" element={<Layout />}>
          <Route index element={<h1>Dashboard</h1>} />
          <Route path="manage" element={<h1>Manage page</h1>} />
          <Route path="setting" element={<h1>Setting page</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
