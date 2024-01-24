import React from "react";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/create-account");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="text-center flex flex-col justify-center items-center">
        <div className="flex items-center mb-4">
          <FaRocket className="text-white text-lg" />
          <div className="ml-2 text-white text-sm font-normal font-['Public Sans'] ">
            For Indian Users Only
          </div>
        </div>
        <div className="text-white text-4xl font-bold font-['Public Sans'] mb-6">
          Start posting anonymously <br /> where no one will judge.
        </div>
        <div className="text-white text-lg font-normal font-['Public Sans'] mb-8">
          Welcome to Stranger discussion forum
        </div>
        <div
          className="w-72 h-12 bg-neutral-700 rounded-full mt-4 flex items-center justify-center cursor-pointer"
          onClick={handleCreateAccountClick}
        >
          <button className="text-white text-base font-normal font-['Public Sans']">
            Create Your Account
          </button>
          <FaArrowRight className="text-white ml-2" />
        </div>
        <div className="text-white text-base font-normal font-['Public Sans'] mt-4">
          Already have an account? <span className="underline cursor-pointer">Login</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
