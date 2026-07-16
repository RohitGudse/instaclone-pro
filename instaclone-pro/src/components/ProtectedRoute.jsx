import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    setLoading(true);

    // Get authentication status from localStorage
    const userToken = localStorage.getItem("authToken");

    if (userToken && userToken.length > 0) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1>Access Denied</h1>
        <p>You must log in before accessing this page.</p>

        <button
          onClick={() => (window.location.href = "/login")}
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Go to Login
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;