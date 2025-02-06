import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../assets/Wavy_Lst-21_Single-12 1.png";
import logo from "../assets/Social icon.png";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialist: "",
    experience: "",
    age: "",
    degree: "",
    city: "",
    address: "",
    contactNo: "",
    medicalLicenseNumber: "",
    medicalLicenseCertificate: null,
    governmentID: null,
    degreeCertificate: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormData((prev) => ({ ...prev, [id]: files[0] }));
  };

  const handleSignup = async () => {
    const {
      fullName,
      username,
      phone,
      email,
      password,
      confirmPassword,
      specialist,
      experience,
      age,
      degree,
      city,
      address,
      contactNo,
      medicalLicenseNumber,
      medicalLicenseCertificate,
      governmentID,
      degreeCertificate,
    } = formData;

    // Validate fields
    if (
      !fullName ||
      !username ||
      !phone ||
      !email ||
      !password ||
      !confirmPassword ||
      !specialist ||
      !experience ||
      !age ||
      !degree ||
      !city ||
      !address ||
      !contactNo ||
      !medicalLicenseNumber ||
      !medicalLicenseCertificate ||
      !governmentID ||
      !degreeCertificate
    ) {
      toast.error("All fields are required!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Prepare form data for submission
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post("/api/signup", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Account created successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("Signup failed. Please try again!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex h-screen">
      <ToastContainer />

      {/* Left Section (Form) */}
      <div className="flex flex-1 justify-center items-center">
        <div className="w-full max-w-2xl bg-white rounded-lg p-8 mt-16">
          <h1 className="text-3xl font-bold text-center mb-2">Create new account</h1>
          <p className="text-center text-gray-600 mb-8">Please enter your details.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Add fields here */}
            {[
              { id: "fullName", label: "Full Name", placeholder: "Hannah Green", type: "text" },
              { id: "username", label: "Username", placeholder: "@hannahgreen76", type: "text" },
              { id: "phone", label: "Phone", placeholder: "123 465 7890", type: "tel" },
              { id: "email", label: "Email Address", placeholder: "qwerty@gmail.com", type: "email" },
              { id: "specialist", label: "Specialist", placeholder: "Cardiologist", type: "text" },
              { id: "experience", label: "Experience", placeholder: "5 years", type: "text" },
              { id: "age", label: "Age", placeholder: "30", type: "number" },
              { id: "degree", label: "Degree", placeholder: "MBBS", type: "text" },
              { id: "city", label: "City", placeholder: "New York", type: "text" },
              { id: "address", label: "Address", placeholder: "123 Main Street", type: "text" },
              { id: "contactNo", label: "Contact No", placeholder: "9876543210", type: "tel" },
              { id: "medicalLicenseNumber", label: "Medical License Number", placeholder: "ML12345", type: "text" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block mb-1 text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                <TextInput
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            {/* File Uploads */}
            {[
              { id: "medicalLicenseCertificate", label: "Medical License Certificate" },
              { id: "governmentID", label: "Government ID (Passport/Driving License)" },
              { id: "degreeCertificate", label: "Degree Certificate" },
            ].map((fileField) => (
              <div key={fileField.id}>
                <label htmlFor={fileField.id} className="block mb-1 text-sm font-medium text-gray-700">
                  {fileField.label}
                </label>
                <input
                  id={fileField.id}
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer"
                  required
                />
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white" onClick={handleSignup}>
              Sign Up
            </Button>
          </div>

          <div className="mt-4">
            <Button className="w-full border border-gray-300 text-gray-700 flex items-center justify-center gap-2" outline>
              <img src={logo} alt="Google" className="w-5 h-5 me-2" /> Sign Up with Google
            </Button>
          </div>

          <div className="mt-6 text-sm text-center text-gray-700">
            Already have an account?{' '}
            <Link to="/" className="font-medium text-blue-500 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-100">
        <img src={image} alt="Signup Illustration" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
