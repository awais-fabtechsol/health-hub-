import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../assets/Wavy_Lst-21_Single-12 1.png";
import logo from "../assets/Social icon.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate hook to navigate

  const handleSignIn = () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Validate password (minimum 6 characters)
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }

    // Success message
    toast.success("Successfully signed in!", {
      position: "top-right",
      autoClose: 3000,
    });

    // Logic to handle login can go here
    console.log("Email:", email, "Password:", password);

    // Navigate to the Select Organization page after successful login
    setTimeout(() => {
      navigate("/select-role"); // Adjust path to match your routes
    }, 2000); // Delay to let the success toast show for 2 seconds
  };

  return (
    <div className="flex h-screen">
      <ToastContainer /> {/* Toast container for notifications */}

      {/* Left Section */}
      <div className="flex flex-1 flex-col justify-center items-center px-10 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
          <p className="text-center text-gray-600 mb-8">
            Please enter your details to log in
          </p>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <TextInput
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Set email state
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <TextInput
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Set password state
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <Link
              to="/forget-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white mb-4"
            onClick={handleSignIn}
          >
            Sign In
          </Button>

          {/* Google Login */}
          <Button
            className="w-full border border-gray-300 text-gray-700 flex items-center justify-center gap-2"
            outline
          >
            <img src={logo} alt="Google" className="w-5 h-5 me-2" />
            Sign in with Google
          </Button>

          {/* Signup Link */}
          <div className="mt-6 text-sm text-center text-gray-700">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-500 hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-100">
        <img
          src={image}
          alt="Login Illustration"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
