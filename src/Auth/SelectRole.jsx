import { Button, Select } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import image from "../assets/Wavy_Lst-21_Single-12 1.png";

export default function SelectOrganization() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNextClick = () => {
    // Add any validation logic if required
    navigate("/admin/dashboard"); // Navigate to /admin/dashboard
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex flex-1 flex-col justify-center items-center px-10 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-4">Select Your Organization</h1>
          <p className="text-center text-gray-600 mb-8">
            Please select the organization you belong to.
          </p>

          {/* Organization Dropdown */}
          <div className="mb-4 w-full">
            <label
              htmlFor="organization"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Organization
            </label>
            <Select
              id="organization"
              required
              className="w-full"
            >
              <option value="">Select an Role</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
             
              {/* Add more organizations dynamically as needed */}
            </Select>
          </div>

          {/* Next Button */}
          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white mb-4"
            onClick={handleNextClick} // Handle click
          >
            Next
          </Button>

          {/* Back to Login Link */}
          <div className="mt-6 text-sm text-center text-gray-700">
            <Link
              to="/login"
              className="font-medium text-blue-500 hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gray-100">
        <img
          src={image}
          alt="Organization Illustration"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
