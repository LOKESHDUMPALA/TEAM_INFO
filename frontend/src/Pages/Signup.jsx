import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CSS/Signup.css";
import Signups from "../Components/Assets/Signups.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    teamname: "",
    projectname: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear error when typing
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.role !== "Admin" && !formData.teamname) newErrors.teamname = "Team Name is required";
    if (formData.role !== "Admin" && !formData.projectname) newErrors.projectname = "Project Name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReset = () => {
    setFormData({
      role: "",
      name: "",
      email: "",
      password: "",
      teamname: "",
      projectname: "",
    });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "https://teaminfo-9ygo.onrender.com/api/auth/signup",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        alert(response.data.message);
        navigate("/login");
      } else {
        alert("Registration Failed!");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Image Section */}
          <div className="col-md-5 d-none d-md-block">
            <img src={Signups} alt="User registration" className="img-fluid rounded-3 shadow-lg" />
          </div>

          {/* Form Section */}
          <div className="col-md-6">
            <div className="card shadow-lg border-0 rounded-3 p-4">
              <div className="card-body">
                <h3 className="text-center mb-4">Register</h3>
                <form onSubmit={handleSubmit}>
                  {/* Role */}
                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select id="role" className={`form-control ${errors.role ? "is-invalid" : ""}`} value={formData.role} onChange={handleChange}>
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="TeamLead">Team Lead</option>
                      <option value="TeamMember">Team Member</option>
                    </select>
                    {errors.role && <small className="text-danger">{errors.role}</small>}
                  </div>

                  {/* Name */}
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" id="name" className={`form-control ${errors.name ? "is-invalid" : ""}`} value={formData.name} onChange={handleChange} placeholder="Enter Your Name" />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" id="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" id="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} value={formData.password} onChange={handleChange} placeholder="Enter Your Password" />
                    {errors.password && <small className="text-danger">{errors.password}</small>}
                  </div>

                  {/* Team Name */}
                  {formData.role !== "Admin" && (
                    <div className="mb-3">
                      <label className="form-label">Team Name</label>
                      <input type="text" id="teamname" className={`form-control ${errors.teamname ? "is-invalid" : ""}`} value={formData.teamname} onChange={handleChange} placeholder="Enter Team Name" />
                      {errors.teamname && <small className="text-danger">{errors.teamname}</small>}
                    </div>
                  )}

                  {/* Project Name */}
                  {formData.role !== "Admin" && (
                    <div className="mb-3">
                      <label className="form-label">Project Name</label>
                      <input type="text" id="projectname" className={`form-control ${errors.projectname ? "is-invalid" : ""}`} value={formData.projectname} onChange={handleChange} placeholder="Enter Project Name" />
                      {errors.projectname && <small className="text-danger">{errors.projectname}</small>}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-danger" onClick={handleReset} disabled={loading}>
                      Reset
                    </button>
                    <button type="submit" className="btn btn-success text-white w-50" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Registering...
                        </>
                      ) : (
                        "Register"
                      )}
                    </button>
                  </div>
                </form>

                {/* Login Link */}
                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary fw-bold">
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
