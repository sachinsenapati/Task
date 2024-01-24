import React, { useState, useEffect } from "react";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const OTPPage = () => {
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract email from the location (URL)
  const emailID = decodeURIComponent(location.pathname.split("/")[2]);

  useEffect(() => {
    // Retrieve userId from localStorage, if available
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleContinueClick = async () => {
    try {
      const response = await axios.post("http://localhost:3001/verify-otp", {
        email: emailID,
        otp,
      });

      if (
        response.status === 200 &&
        response.data.message === "OTP verified successfully"
      ) {
        const verifiedUserId = response.data.userId;

        // Store userId in localStorage
        localStorage.setItem("userId", verifiedUserId);
        setUserId(verifiedUserId);

        // Redirect to the account-created page
        navigate(`/account-created?userId=${verifiedUserId}`);
      } else {
        console.error("OTP verification failed:", response.data.message);
      }
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-96 h-96 bg-white bg-opacity-10 rounded-lg p-8 text-white flex flex-col justify-center items-center">
        <div className="mb-4">
          <FaRocket size={32} />
        </div>
        <div className="text-white text-2xl font-bold mb-4 text-center">
          Create Your Account
        </div>
        <div className="text-center text-white text-opacity-50 text-sm font-normal mb-8">
          Please verify your email ID to continue.
          <br />
          We have sent an OTP to this {emailID}
        </div>

        <div className="mb-4 w-72">
          <div className="w-full h-12 pl-24 pr-20 py-3.5 bg-neutral-700 rounded-full flex justify-end items-center">
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              className="text-white text-base font-normal w-full px-4 outline-none bg-transparent"
              placeholder="Enter OTP"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mb-4 w-72">
          <button
            onClick={handleContinueClick}
            className="text-base font-normal bg-neutral-700 rounded-full px-6 py-2 cursor-pointer flex items-center"
          >
            Continue <FaArrowRight className="ml-2" />
          </button>
        </div>

        <div className="w-6 h-6 mx-auto"></div>
      </div>
    </div>
  );
};

export default OTPPage;
