import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { login, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // const response = await fetch("/api/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(credentials),
      // });
      const response = {
        ok: true,
        json: async () => ({
          token: "mocked_token",
        }),
      };

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      login(data.token);
      if (user) {
        console.log("User is authenticated:", user);
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light p-3">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-warning">
            Welcome back{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h2>
          <p className="text-muted">Please enter your details below</p>
        </div>

        {error && (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="me-2"
              viewBox="0 0 24 24">
              <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-warning">
              Work Email
            </label>
            <input
              type="email"
              name="username"
              placeholder="Enter your email"
              className="form-control bg-dark text-white"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-warning">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control bg-dark text-white"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100 text-white"
            disabled={loading}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
