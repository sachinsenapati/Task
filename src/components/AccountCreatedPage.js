import React from "react";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccountCreatedPage = ({ userName }) => {
  const navigate = useNavigate();

  const handleCreatePostClick = () => {
    // Redirect to the dashboard page
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-96 h-96 bg-white bg-opacity-10 rounded-lg p-8 text-white relative flex flex-col justify-center items-center">
        <div className="mb-4">
          <FaCheck size={32} color="#28a745" />
        </div>
        <div className="text-center text-white text-2xl font-bold mb-4 font-['Public Sans']">
          Account Created Successfully
        </div>
        <div className="mb-4">
          <div
            onClick={handleCreatePostClick}
            className="cursor-pointer h-12 pl-9 pr-11 py-3.5 bg-neutral-700 rounded-full justify-start items-center flex"
          >
            <button className="text-white text-base font-normal font-['Public Sans']">
              Create Your First Post
            </button>
            <FaArrowRight className="ml-2" size={20} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCreatedPage;
