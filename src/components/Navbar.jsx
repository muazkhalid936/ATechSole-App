"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import "./Nav.css";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Ref for the sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false); // Close the sidebar
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="header-area">
        <div className="header-btm-area">
          <div className="px-lg-4 container-menu">
            <div className="main-menu-wrap">
              <div className="site-logo">
                <a className="logo" href="/">
                  <h2 style={{ color: "white" }}>ATechSole</h2>
                </a>
              </div>
              <div className="main-menu-area" style={{ alignItems: "center" }}>
                <nav className="mainmenu ">
                  <ul className="my-auto text-right">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="About">About Us</a>
                    </li>
                    <li>
                      <a href="Service">Services</a>
                    </li>
                    <li>
                      <a href="Work">Work</a>
                    </li>
                    <li>
                      <a href="Insight">Insights</a>
                    </li>
                    {/* <li><a href="Blog">Blog</a></li> */}
                    <li>
                      <a href="Career">Careers</a>
                    </li>
                    <li>
                      <a href="Contact">Contacts</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-icon">
                <a
                  href="#"
                  className="sidebar-toggle-btn"
                  onClick={toggleSidebar}
                >
                  <FaBarsStaggered />
                </a>
              </div>
              <div className="header-log-reg text-right">
                <a
                  className="main-menu__estimate-text"
                  href="javascript:void(0)"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
            <div className="site-header__separator separator-dense">
              {Array(12)
                .fill()
                .map((_, i) => (
                  <div key={i} className="separator-dense__cell"></div>
                ))}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Component */}
      <div
        className={`sidebar ${isSidebarOpen ? "open" : "hidden"}`}
        ref={sidebarRef}
      >
        <IoCloseSharp className="close-icon" onClick={toggleSidebar} />
        <nav className="sidebar-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="About">About Us</a>
            </li>
            <li>
              <a href="Service">Services</a>
            </li>
            <li>
              <a href="Service-Details">Service Details</a>
            </li>
            <li>
              <a href="Work">Work</a>
            </li>
            <li>
              <Link href="Development">Development</Link>
            </li>
            <li>
              <a href="Startup-Details">Startup Details</a>
            </li>
            <li>
              <a href="Insight">Insights</a>
            </li>
            {/* <li><a href="Blog">Blog</a></li> */}
            <li>
              <a href="Career">Careers</a>
            </li>
            <li>
              <a href="Contact">Contacts</a>
            </li>
            <li>
              <a href="Privacy-Policy">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
