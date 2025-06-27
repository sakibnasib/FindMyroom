
import React, { useState, useContext } from 'react';
import './login.css';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContex } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import Button from '../Button/Button';

const Register = () => {
  const { createUser, setUser, updateUser, goggle } = useContext(AuthContex);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    photo: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = e => {
    e.preventDefault();
    const { name, photo, email, password } = form;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Weak Password',
        html: `
          <ul style="text-align: left;">
            <li>❌ Must have an <strong>uppercase</strong> letter</li>
            <li>❌ Must have a <strong>lowercase</strong> letter</li>
            <li>❌ Must be at least <strong>6 characters</strong> long</li>
          </ul>
        `,
        timer: 3000,
      });
      return;
    }
    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            navigate('/');
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'You are successfully Registered',
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch(error => {
            console.log(error);
            setUser(user);
          });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: 'Error?',
          text: errorCode || errorMessage || String(error),
          icon: 'question',
        });
      });
  };

  const handleGoggle = () => {
    goggle()
      .then(() => {
        navigate('/');
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'You are successfully Login',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="login-bg">
      <div className="login-container animate-pop">
        <h2 className="login-title">Register</h2>
        <p className="login-subtitle">Create your account</p>
        <form className="login-form" onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              value={form.photo}
              onChange={handleChange}
              className="login-input"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              className="login-input"
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
              className="login-input"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(s => !s)}
              tabIndex={0}
              role="button"
              aria-label="Toggle password visibility"
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <Button  text="REGISTER" />

        </form>
        <div className="signup-row">
          <span>Already have an account? <Link to="/auth/login" className="join-link">Login</Link></span>
        </div>
        <div className="divider-row">
          <span className="divider" />
          <span className="or-text">OR</span>
          <span className="divider" />
        </div>
        <button className="google-btn" type="button" onClick={handleGoggle}>
          <FcGoogle size={22} style={{ marginRight: 8 }} />
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
