//rfce
import React from "react";
import { Outlet } from "react-router";
import MainNav from "../components/mainNav";

function Layout() {
  return (
    <div>
      <MainNav />
      Layout
      <Outlet />
    </div>
  );
}

export default Layout;
