import React, { use, useState } from 'react';
import { Link} from 'react-router';
import { AuthContex } from '../Provider/AuthProvider';
import { useNavigate, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import './login.css';
import { FcGoogle } from 'react-icons/fc';
import Button from '../Button/Button';
const Login = () => {
	const {signIn,goggle}=use(AuthContex)
 const location = useLocation();
 const navigate = useNavigate();
 const [showPassword, setShowPassword] = useState(false);

  console.log(location)
    const handleLogin=e=>{
 e.preventDefault();
 const email=e.target.email.value 
 const password=e.target.password.value

 signIn(email,password)
 .then((result)=>{
	const user = result.user;
	// Navigate(`${location.state ? location.state : "/"}`);
	 navigate(`${location.state ? location.state : "/"}`);
	Swal.fire({
  position: "top-center",
  icon: "success",
  title: "You are successfully Login",
  showConfirmButton: false,
  timer: 1500
});
 
 })
  .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
		  title: "Error?",
		  text: errorCode ||String(error) ,
		  icon: "question"
		});
      });

    };
	const handleGoggle=()=>{
		goggle()
		.then(()=>{
    navigate(`${location.state ? location.state : "/"}`);
	
	Swal.fire({
  position: "top-center",
  icon: "success",
  title: "You are successfully Login",
  showConfirmButton: false,
  timer: 1500
});
  }).catch(error=>{
      console.log(error)
  })
	}
    return (
<div className="login-bg">
      <div className="login-container animate-pop">
        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">Login to your account</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
             name="email"
              required
              className="login-input"
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
            name="password"
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
          <div className="forgot-row">
          
          </div>
		 
          <Button text="LOGIN" />
        </form>
        <div className="signup-row">
         <p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account?
 		<Link to='/auth/register'  className="underline join-link"> Register</Link>
 	</p>
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

export default Login;



