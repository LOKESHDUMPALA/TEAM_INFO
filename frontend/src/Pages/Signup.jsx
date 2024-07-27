import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import './CSS/Signup.css';
import Signups from "../Components/Assets/Signups.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    email: '',
    password: '',
    teamname: '',
    projectname: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      role: '',
      name: '',
      email: '',
      password: '',
      teamname: '',
      projectname: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (response.status === 200) {
        alert(response.data.message);
        navigate("/login");
      } else {
        alert("Registration Failed !!!");
        navigate('/signup');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: 'whitesmoke' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-5 mb-4 mb-md-0">
            <img
              src={Signups}
              alt="User registration form"
              className="img-fluid rounded-start"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '1rem' }}
            />
          </div>
          <div className="col-md-7">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5">
                <h3 className="mb-5 text-center" style={{ fontSize: "1.6rem" }}>Register</h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <select
                      className="form-control form-control-lg"
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option value="">Role</option>
                      <option value="Admin">Admin</option>
                      <option value="TeamLead">Team Lead</option>
                      <option value="TeamMember">Team Member</option>
                    </select>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="name"
                      className="form-control form-control-lg"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </div>

                  {formData.role !== 'Admin' && (
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="teamname"
                        className="form-control form-control-lg"
                        value={formData.teamname}
                        onChange={handleChange}
                        placeholder="Team Name"
                      />
                    </div>
                  )}

                  {formData.role !== 'Admin' && (
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="projectname"
                        className="form-control form-control-lg"
                        value={formData.projectname}
                        onChange={handleChange}
                        placeholder="Project Name"
                      />
                    </div>
                  )}

                  <div className="d-flex justify-content-between mt-4">
                    <button
                      type="button"
                      className="btn btn-danger btn-lg"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success btn-lg w-50 text-white"
                    >
                      Register
                    </button>
                  </div>

                  <p className="text-muted mt-4 mb-0">
                    Already have an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
