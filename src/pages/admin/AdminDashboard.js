import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/contact", {
        headers: { Authorization: token },
      });
      setContacts(res.data);
    } catch (err) {
      console.error("Error fetching data", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/contact/${id}`, {
        headers: { Authorization: token },
      });
      fetchData();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          S_K <span>SOLAR</span>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item active">Contact Leads</div>
          {/* Add more nav items here in future */}
        </nav>
        <button onClick={handleLogout} className="logout-btn-sidebar">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="content-header">
          <h2>Customer Inquiries</h2>
          <div className="stats-pill">Total Leads: {contacts.length}</div>
        </header>

        <div className="table-container">
          {loading ? (
            <div className="loader">Loading leads...</div>
          ) : (
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c._id}>
                    <td>
                      <strong>{c.name}</strong>
                    </td>
                    <td>{c.email}</td>
                    <td>{c.phone}</td>
                    <td className="msg-cell">{c.message}</td>
                    <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        className="delete-icon-btn"
                        onClick={() => deleteData(c._id)}
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!loading && contacts.length === 0 && (
            <p className="no-data">No inquiries found yet.</p>
          )}
        </div>
      </main>
    </div>
  );
}
