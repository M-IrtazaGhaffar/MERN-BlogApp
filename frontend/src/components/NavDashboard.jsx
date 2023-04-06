import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavDashboard() {
  const location = useLocation();
  return (
    <div className="p-5 bg-slate-200 mx-5 rounded-xl border-solid border-2 border-gray-400 flex flex-col justify-between height-100percent">
      <div>
        <h3 className="text-2xl pb-10 font-extrabold">Dashboard</h3>
        <ul className="flex flex-col gap-2">
          <p className="text-sm">General</p>
          <Link
            to="/user/dashboard"
            className={`${
              location.pathname === "/user/dashboard" ? "activeNav" : ""
            } hover:scale-110 ease-in-out duration-200 bg-slate-300 hover:bg-slate-700 hover:text-white p-3 rounded-lg cursor-pointer`}
          >
            Home
          </Link>
          <Link
            to="/user/dashboard/settings"
            className={`${
              location.pathname === "/user/dashboard/settings"
                ? "activeNav"
                : ""
            } hover:scale-110 ease-in-out duration-200 bg-slate-300 hover:bg-slate-700 hover:text-white p-3 rounded-lg cursor-pointer`}
          >
            Settings
          </Link>
          <Link
            to="/user/dashboard/change-password"
            className={`${
              location.pathname === "/user/dashboard/change-password"
                ? "activeNav"
                : ""
            } hover:scale-110 ease-in-out duration-200 bg-slate-300 hover:bg-slate-700 hover:text-white p-3 rounded-lg cursor-pointer`}
          >
            Change Password
          </Link>
          <br />
          <p className="text-sm">Posts</p>
          <Link
            to="/user/dashboard/create-post"
            className={`${
              location.pathname === "/user/dashboard/create-post"
                ? "activeNav"
                : ""
            } hover:scale-110 ease-in-out duration-200 bg-slate-300 hover:bg-slate-700 hover:text-white p-3 rounded-lg cursor-pointer`}
          >
            Create Post
          </Link>
          <Link
            to="/user/dashboard/manage-posts"
            className={`${
              location.pathname === "/user/dashboard/manage-posts"
                ? "activeNav"
                : ""
            } hover:scale-110 ease-in-out duration-200 bg-slate-300 hover:bg-slate-700 hover:text-white p-3 rounded-lg cursor-pointer`}
          >
            Manage Posts
          </Link>
          <br />
          <p className="text-sm">Others</p>
          <Link
            to="/user/dashboard/report-problem"
            className={`${
              location.pathname === "/user/dashboard/report-problem"
                ? "activeNav"
                : ""
            } hover:scale-110 ease-in-out duration-200 bg-slate-300 hover:bg-slate-700 hover:text-white p-3 rounded-lg cursor-pointer`}
          >
            Report a Problem
          </Link>
          <Link
            to="/user/login"
            className="hover:scale-110 ease-in-out duration-200 bg-slate-300 hover:bg-slate-700 hover:text-white p-3 rounded-lg cursor-pointer"
          >
            Log out
          </Link>
        </ul>
      </div>
      <a
        className="text-xs text-red-500 text-center pt-20"
        target="_blank"
        href="https://bytewisecode.netlify.app/"
      >
        Made by ByteWiseCode Developers
      </a>
    </div>
  );
}

export default NavDashboard;
