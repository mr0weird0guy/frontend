import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "./index.jsx";
import { DashboardIcon, FormIcon } from "../assets/index.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState("");
  const { logout } = useAuth();

  useEffect(() => {
    const path = location.pathname;
    // Determine active path based on current location
    sidebarOptions.forEach((option) => {
      if (path.includes(option.path)) {
        setActivePath(option.id);
      }
    });
  }, [location]);

  const getIconContainerClasses = (itemId) => {
    return `w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
      activePath === itemId ? "bg-[#7670B5]" : ""
    }`;
  };

  const getTextClasses = (itemId) => {
    return `text-xs text-center leading-tight ${
      activePath === itemId ? "text-[#7670B5] font-medium" : "text-gray-500"
    }`;
  };

  const renderIcon = (option, isActive) => {
    // Check if option.icon is a string (path to image)
    if (typeof option.icon === "string") {
      // This is the path to your SVG asset
      return (
        <div className={`w-6 h-6 ${isActive ? "text-white" : "text-gray-500"}`}>
          <img
            src={option.icon}
            alt={option.label}
            className="w-full h-full"
            // Apply CSS filter to change SVG color
            style={{
              filter: isActive
                ? "brightness(0) invert(1)" // Makes it white when active
                : "none", // Original color when inactive
            }}
          />
        </div>
      );
    }
  };

  const sidebarOptions = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/dashboard",
      icon: DashboardIcon,
    },
    {
      id: "manageForm",
      label: "ManageForm",
      path: "/manage-form",
      icon: FormIcon,
    },
  ];

  // Process the label text to handle multi-word labels better
  const processLabel = (label) => {
    const words = label.split(" ");

    // For desktop view, if there's more than one word, stack them
    if (words.length > 1) {
      return words.map((word, index) => (
        <div key={index} className="leading-tight">
          {word}
        </div>
      ));
    }

    return label;
  };

  const handleLogout = () => {
    console.log("User logged out");
    logout(); // Call the logout function from AuthContext
  };

  return (
    <div className="overflow-hidden bg-light">
      <Header />

      <div className="d-flex vh-75 flex-row flex-grow-1 overflow-hidden">
        {/* Sidebar */}
        <div className="d-flex align-items-center">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%" }}>
            <div
              className="card bg-warning shadow-sm d-flex flex-column justify-content-between py-4 mx-auto"
              style={{ width: "220px", height: "100%", borderRadius: "0" }}>
              <div className="d-flex flex-column align-items-start px-3">
                {sidebarOptions.map((option) => (
                  <div
                    key={option.id}
                    className="my-2 d-flex flex-row align-items-center w-100 cursor-pointer"
                    onClick={() => navigate(option.path)}
                    style={{ cursor: "pointer" }}>
                    <div className={getIconContainerClasses(option.id)}>
                      {renderIcon(option, activePath === option.id)}
                    </div>
                    <div className={`${getTextClasses(option.id)} ms-2`}>
                      {processLabel(option.label)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex flex-column align-items-start px-3 pb-3 border-top pt-3">
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="btn btn-danger w-100 d-flex align-items-center justify-content-center">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="d-flex flex-column flex-grow-1 overflow-hidden w-100">
          <main
            className="flex-grow-1 overflow-auto p-3"
            style={{ height: "90vh" }}>
            <div className="my-6 mx-4">
              <div className="flex justify-between items-center my-8 w-[1585] ">
                <h1 className="text-[#65558F] text-3xl md:text-3xl font-bold mb-4">
                  {activePath.charAt(0).toUpperCase() + activePath.slice(1) ||
                    "Review Response"}
                </h1>
              </div>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
