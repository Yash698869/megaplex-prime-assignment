import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import "../styles/admin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("/login", { email, password });
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <h1 className="admin-login-title">Admin Login</h1>
        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-field">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@gmail.com"
            />
          </div>
          <div className="admin-field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="admin-btn primary">Login</button>
        </form>
        {error && <p className="admin-error">{error}</p>}
      </div>
    </div>
  );
}

export default AdminLogin;
