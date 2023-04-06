import React from "react";
import { Outlet } from "react-router-dom";
import NavDashboard from "../components/NavDashboard";

function Dashboard() {
  return (
    <>
    <div className="tablet:flex mobile:hidden mt-10">
      <div className="laptop:w-1/3 desktop:w-1/4">
        <NavDashboard />
      </div>
      <br />
      <br />
      <br />
      <div className="p-10">
        <Outlet />
      </div>
    </div>
    <div className="tablet:hidden mobile:flex items-center justify-center fullHeight">
    <p className="text-2xl text-center p-10 font-bold">Use Tablet or Laptop/Desktop to view</p>
    </div>
    </>
  );
}

export default Dashboard;
