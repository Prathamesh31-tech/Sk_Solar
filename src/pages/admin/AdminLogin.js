import { useState } from "react";
import axios from "axios";
import "./AdminLogin.css";
export default function AdminLogin({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents page reload
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email: email.trim(),
        password: password.trim(),
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        window.location.href = "/admin/dashboard";
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="glass-container">
        <div className="login-header">
          <h1 className="brand-name">
            S_K <span className="solar-text">SOLAR</span>
          </h1>
          <p className="subtitle">Admin Management Portal</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="admin@sksolar.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Authenticating..." : "Login to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}
