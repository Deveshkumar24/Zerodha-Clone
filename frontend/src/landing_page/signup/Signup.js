import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:3002/signup", {
        username,
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);

      // Redirect to Dashboard on port 3001
      window.location.href = `http://localhost:3001/?token=${token}`;
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Unable to connect to the backend server. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-5" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="row justify-content-center w-100">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-lg border-0 p-4" style={{ borderRadius: "12px", backgroundColor: "#fff" }}>
            <div className="text-center mb-4">
              <img src="media/images/logo.svg" style={{ width: "35%", marginBottom: "15px" }} alt="Kite Logo" />
              <h3 className="fw-semibold text-dark" style={{ fontSize: "22px" }}>Sign up to Kite</h3>
              <p className="text-muted" style={{ fontSize: "14px" }}>Join over 10 million clients trading with Zerodha</p>
            </div>

            {error && (
              <div className="alert alert-danger py-2 px-3 mb-3 text-center" style={{ fontSize: "14px", borderRadius: "8px" }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>Username</label>
                <input
                  type="text"
                  className="form-control py-2"
                  style={{ borderRadius: "8px", borderColor: "#e0e0e0" }}
                  placeholder="Choose username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>Email address</label>
                <input
                  type="email"
                  className="form-control py-2"
                  style={{ borderRadius: "8px", borderColor: "#e0e0e0" }}
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="mb-4">
                <label className="form-label text-muted fw-semibold" style={{ fontSize: "12px" }}>Password</label>
                <input
                  type="password"
                  className="form-control py-2"
                  style={{ borderRadius: "8px", borderColor: "#e0e0e0" }}
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-semibold mb-3"
                style={{
                  backgroundColor: "#ff5722",
                  borderColor: "#ff5722",
                  borderRadius: "8px",
                  fontSize: "15px"
                }}
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>
            </form>

            <div className="text-center mt-3" style={{ fontSize: "14px" }}>
              <span className="text-muted">Already have an account? </span>
              <Link to="/login" style={{ color: "#387ed1", textDecoration: "none", fontWeight: "500" }}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;