import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContinueClick = async () => {
    try {
      const response = await axios.post("http://localhost:3001/send-otp", {
        name,
        email,
      });

      if (response.status === 200) {
        navigate(`/otp-page/${encodeURIComponent(email)}`);
      }
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-8 rounded-lg bg-white bg-opacity-10 text-white text-center">
        <div className="flex items-center justify-center mb-4">
          <FaRocket size={30} />
        </div>
        <div className="text-3xl font-bold mb-6">Create Your Account</div>
        <div className="mb-6">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="text-base font-normal w-full px-4 py-2 outline-none bg-transparent border border-white rounded-full"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="text-base font-normal w-full px-4 py-2 outline-none bg-transparent border border-white rounded-full"
            placeholder="Enter Email ID"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleContinueClick}
            className="text-base font-normal bg-neutral-700 rounded-full px-6 py-2 cursor-pointer flex items-center"
          >
            Continue <span className="ml-2">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
