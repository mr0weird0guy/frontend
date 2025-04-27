import React from "react";
import { useAuth } from "../context/AuthContext.jsx";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header
      className="d-flex align-items-center justify-content-between px-4 py-2 bg-warning shadow-sm"
      style={{ height: "64px", width: "100%" }}>
      {/* Left Side - Hamburger and Logo */}
      <div className="d-flex align-items-center gap-3">
        <div className="d-flex align-items-center">
          <span className="fs-3 fw-bold">
            V<sup className="small">x</sup>
          </span>
        </div>
      </div>

      <div className="text-center flex-grow-1 position-absolute start-50 translate-middle-x">
        <h1 className="h5 fw-bold mb-0">VenEx AI</h1>
      </div>

      <div className="d-flex align-items-center gap-3">
        <div className="dropdown">
          <button
            className="btn p-0 fw-bold"
            type="button"
            id="userMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Welcome, {user?.name || "User"}
          </button>

          <ul
            className="dropdown-menu dropdown-menu-end shadow-sm border"
            aria-labelledby="userMenuButton"
            style={{ minWidth: "16rem" }}>
            <li className="px-3 py-2 border-bottom">
              <div className="d-flex flex-column">
                <span className="fw-semibold">{user?.name || "User"}</span>
                <small className="text-muted">
                  {user?.email || "No email"}
                </small>
                <small className="text-muted mt-1 text-capitalize">
                  {user?.role || "No role"}
                </small>
              </div>
            </li>
            <li>
              <button
                onClick={logout}
                className="dropdown-item text-danger d-flex align-items-center gap-2">
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
