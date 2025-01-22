//rfce
import React from "react";
import { Link, Outlet, Route, Routes } from "react-router";
import Layout from "../layouts/Layout";
import About from "../pages/About.Jsx";
import Home from "../pages/Home.Jsx";
import Contact from "../pages/Contact.Jsx";
import Login from "../pages/Login.Jsx";
import Register from "../pages/Register.Jsx";
import Recap from "../pages/Recap.jsx";
import Dashboard from "../pages/admin/Dashboard.Jsx";
import Manage from "../pages/admin/Manage.Jsx";
import Setting from "../pages/admin/Setting.Jsx";
import RecapUseState from "../pages/RecapUseState.jsx";

function AppRoutes() {
  return (
    <div>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recap" element={<Recap />} />
          <Route path="recapUseState" element={<RecapUseState />} />
        </Route>

        {/* Private */}
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
