import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContex } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
	const {createUser, setUser, updateUser,goggle}=use(AuthContex);
	const navigate = useNavigate();
	
    const handleRegister=e=>{
        e.preventDefault();
        const form=e.target 
        const name=form.name.value 
        const photo=form.photo.value 
        const email=form.email.value 
        const password=form.password.value ;
		const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

if (!passwordPattern.test(password)) {
  Swal.fire({
    icon: "error",
    title: "Weak Password",
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
		 
      // firebase 
	  createUser(email,password)
	  .then((result)=>{
		const user=result.user ;
		 updateUser({ displayName: name, photoURL: photo })
		  .then(() => {
			navigate('/')
            setUser({ ...user, displayName: name, photoURL: photo });
			Swal.fire({
  position: "top-center",
  icon: "success",
  title: "You are successfully Register",
  showConfirmButton: false,
  timer: 1500
});
            // navigate("/");
          }).catch((error) => {
            console.log(error);
            setUser(user);
          });
	  })
	    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
		Swal.fire({
  title: "Error?",
  text: errorCode || errorMessage || String(error) ,
  icon: "question"
});
        // alert(errorMessage, errorCode);
        // ..
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
        <div className=" flex justify-center items-center m-5">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-gray-800">
	<h1 className="text-2xl font-bold text-center">Register</h1>
	<form onSubmit={handleRegister} className="space-y-6">
        {/* name */}
<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-600 font-semibold">Name</label>
			<input type="text" name="name" placeholder="name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
		</div>
{/* phot */}
<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-600 font-semibold">Photo_Url</label>
			<input type="text" name="photo" placeholder="Photo_Url" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-600 font-semibold">Email</label>
			<input type="email" name="email"  placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-600 font-semibold">Password</label>
			<input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Register</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
		<p className="px-3 text-sm text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoggle} aria-label="Log in with Google" className="p-3 rounded-full bg-white">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
	</div>
	<p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account?
		<Link to='/login'  className="underline text-gray-800">Login</Link>
	</p>
</div>
        </div>
    );
};

export default Register;