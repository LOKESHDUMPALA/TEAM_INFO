import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './CSS/Login.css'; // Ensure this file has the latest styles
import UserContext from '../Context/ContextAPI';

const Login = () => {
  const { setUserContext } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://teaminfo-9ygo.onrender.com/api/auth/login", formData, {
        headers: { "Content-Type": "application/json" }
      });

      setLoading(false);

      if (response.status === 200) {
        if (response.data.success) {
          if (response.data.pwd) {
            toast.success("User logged in successfully! 🎉");
            const user = response.data.user;
            setUserContext(user);

            setTimeout(() => {
              if (user.role === "Admin") navigate("/admin");
              else if (user.role === "TeamLead") navigate("/teamlead");
              else navigate("/teammember");
            }, 2000);
          } else {
            toast.error("Wrong password! Please enter the correct password.");
            setFormData({ ...formData, password: '' });
          }
        } else {
          toast.warning("User not registered! Please sign up.");
          setTimeout(() => navigate("/signup"), 1500);
        }
      } else {
        toast.error("Login failed! Try again.");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong! ❌");
      console.error(err);
    }
  };

  return (
    <section className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="login-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="login-input"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            required
          />

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (
              <div className="loading-box">
                <div className="spinner"></div>
                <span>Loading...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Register</Link>
        </p>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar closeOnClick />
    </section>
  );
};

export default Login;
