import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const logoutCmd = queryParams.get("logout");
    if (logoutCmd) {
      localStorage.removeItem("token");
      setToken(null);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.href = "https://zerodha-clone-dashboard-red.vercel.app/?logout=true";
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF"}}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" style={{width:"25%"}} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex ms-auto" role="search">
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              {token ? (
                <>
                  <li className="nav-item ms-3">
                    <a 
                      className="btn text-white fw-semibold px-3 py-1" 
                      href={`https://zerodha-clone-dashboard-red.vercel.app/?token=${token}`}
                      style={{ backgroundColor: "#387ed1", borderRadius: "4px", fontSize: "14px" }}
                    >
                      Go to Dashboard
                    </a>
                  </li>
                  <li className="nav-item ms-3">
                    <button 
                      className="nav-link btn btn-link active fw-semibold text-danger border-0 bg-transparent p-0" 
                      onClick={handleLogout} 
                      style={{ textDecoration: "none" }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ms-3">
                    <Link className="nav-link active" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link 
                      className="btn text-white fw-semibold px-3 py-1" 
                      to="/signup"
                      style={{ backgroundColor: "#ff5722", borderRadius: "4px", fontSize: "14px" }}
                    >
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
