import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    
    // Check if logout request was sent
    const logoutCmd = queryParams.get("logout");
    if (logoutCmd) {
      localStorage.removeItem("token");
      window.location.href = "https://zerodha-clone-sand.vercel.app/login";
      return;
    }

    // 1. Check if token is in the URL query string
    const tokenFromUrl = queryParams.get("token");

    if (tokenFromUrl) {
      // Save token to localStorage
      localStorage.setItem("token", tokenFromUrl);
      
      // Clean up the URL by removing query parameters
      window.history.replaceState({}, document.title, window.location.pathname);
      setIsAuthenticated(true);
    } else {
      // 2. Check if token is in localStorage
      const tokenFromStorage = localStorage.getItem("token");
      if (tokenFromStorage) {
        setIsAuthenticated(true);
      } else {
        // 3. Not authenticated, redirect to frontend login page
        window.location.href = "https://zerodha-clone-sand.vercel.app/login";
      }
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        color: "#444"
      }}>
        <div style={{ textAlign: "center" }}>
          <h2>Redirecting to login...</h2>
          <p>Please wait while we verify your session.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
