import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { signInUser, googleLogin } = use(AuthContext);

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login successful!");
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch(() => {
        toast.error("Invalid email or password!");
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate(location.state || "/");
      })
      .catch(() => {
        toast.error("Google Sign-in failed!");
      });
  };

  const handleForgotPassword = (email) => {
    if (!email) return toast.error("Please enter your email first!");

    sendPasswordResetEmail(auth, email)
      .then(() => toast.success("Password reset email sent!"))
      .catch(() => toast.error("Failed to send reset email!"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6f1eb] to-[#e7ddd2] px-4">

      <div className="w-full max-w-sm bg-white shadow-2xl rounded-2xl border border-[#e5d6c8] p-8">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#3b2a1f]">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Login to BookCourier
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-4">

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-[#5a3e2b]">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg 
                         transition-all duration-300 ease-in-out
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
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                           transition-all duration-300 ease-in-out
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

          {/* FORGOT PASSWORD */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => handleForgotPassword(email)}
              className="text-sm text-[#5a3e2b] hover:underline hover:text-[#3b2a1f]
                         transition"
            >
              Forgot password?
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#5a3e2b] text-white py-2 rounded-lg 
                       font-medium
                       transition-all duration-300 ease-in-out
                       hover:bg-[#3b2a1f] hover:scale-[1.02] active:scale-[0.98]"
          >
            Login
          </button>

          {/* GOOGLE LOGIN */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 
                       border border-gray-300 py-2 rounded-lg 
                       transition-all duration-300 ease-in-out
                       hover:bg-gray-100 hover:shadow-md hover:scale-[1.01]"
          >
            <FaGoogle />
            Continue with Google
          </button>

        </form>

        {/* SIGNUP */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            className="text-[#5a3e2b] font-medium hover:underline hover:text-[#3b2a1f] transition"
            to="/register"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;