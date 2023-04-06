import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import ChangePassword from "./pages/ChangePassword";
import Manage from "./pages/Manage";
import HomeDashboard from "./pages/HomeDashboard";
import Settings from "./pages/Settings";
import Report from "./pages/Report";
import User from "./pages/User";

function App() {
  return (
    <div className="font-Montserrat">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/blog/:id" element={<Blog />} />
          <Route exact path="/user/login" element={<Login />} />
          <Route exact path="/user/register" element={<Register />} />
          <Route exact path="/user/:uid" element={<User />} />
          <Route exact path="/user/dashboard" element={<Dashboard />}>
            <Route index path="*" element={<HomeDashboard />} />
            <Route exact path="create-post" element={<Create />} />
            <Route exact path="manage-posts" element={<Manage />} />
            <Route exact path="change-password" element={<ChangePassword />} />
            <Route exact path="settings" element={<Settings />} />
            <Route exact path="report-problem" element={<Report />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
