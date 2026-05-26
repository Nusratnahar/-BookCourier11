import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const { createUser, googleLogin } = use(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!/[A-Z]/.test(password)) {
      setError('Password must have at least 1 uppercase letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must have at least 1 lowercase letter');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setError('');

    createUser(email, password)
      .then(() => {
        toast.success('Signup successful!');
        navigate('/');
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success('Login with Google successful!');
        navigate('/');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-linear-to-br from-[#f6f1eb] to-[#e7ddd2] p-5 ">

      <div className="w-full max-w-sm bg-white shadow-2xl rounded-2xl border border-[#e5d6c8] p-8">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#3b2a1f]">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Start Your BookCourier Journey
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-3">
            {error}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleSignUp} className="space-y-3">

          {/* NAME */}
          <div>
            <label className="text-sm font-medium text-[#5a3e2b]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg 
                         transition-all duration-300
                         focus:outline-none focus:border-[#5a3e2b] focus:ring-2 focus:ring-[#5a3e2b]/30
                         hover:border-[#5a3e2b]"
              required
            />
          </div>

          {/* PHOTO URL */}
          <div>
            <label className="text-sm font-medium text-[#5a3e2b]">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg 
                         transition-all duration-300
                         focus:outline-none focus:border-[#5a3e2b] focus:ring-2 focus:ring-[#5a3e2b]/30
                         hover:border-[#5a3e2b]"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-[#5a3e2b]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg 
                         transition-all duration-300
                         focus:outline-none focus:border-[#5a3e2b] focus:ring-2 focus:ring-[#5a3e2b]/30
                         hover:border-[#5a3e2b]"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium text-[#5a3e2b]">
              Password
            </label>

            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                           transition-all duration-300
                           focus:outline-none focus:border-[#5a3e2b] focus:ring-2 focus:ring-[#5a3e2b]/30
                           hover:border-[#5a3e2b]"
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500
                           hover:text-[#5a3e2b] transition"
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </span>
            </div>
          </div>

          {/* REGISTER BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#5a3e2b] text-white py-2 rounded-lg 
                       font-medium
                       transition-all duration-300
                       hover:bg-[#3b2a1f] hover:scale-[1.02] active:scale-[0.98]"
          >
            Register
          </button>

          {/* GOOGLE */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 
                       border border-gray-300 py-2 rounded-lg 
                       transition-all duration-300
                       hover:bg-gray-100 hover:shadow-md hover:scale-[1.01]"
          >
            <FaGoogle />
            Continue with Google
          </button>

        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#5a3e2b] font-medium hover:underline hover:text-[#3b2a1f] transition"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;