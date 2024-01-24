import React, { useState } from "react";
import axios from "axios";

const LastPage = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const handlePostSubmit = async () => {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error("User ID not available");
        return;
      }
      const response = await axios.post("http://localhost:3001/create-post", {
        userId,
        title: postTitle,
        description: postDescription,
      });

      console.log("Post submitted successfully!");

      setPostTitle("");
      setPostDescription("");
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-4/5 h-4/5 relative rounded-lg flex">
 
        <div className="w-1/2 flex flex-col items-center">
          <div className="w-96 h-96 bg-stone-950 rounded-tl-lg rounded-tr-lg flex flex-col justify-between p-4">
            <div>
              <div className="text-white text-xl font-bold font-sans mb-4">
                Create Post
              </div>

              <input
                type="text"
                placeholder="Post Title"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                className="w-full py-2 px-4 bg-white bg-opacity-5 rounded-lg mb-4 text-white"
              />

              <textarea
                placeholder="Describe your post..."
                value={postDescription}
                onChange={(e) => setPostDescription(e.target.value)}
                className="w-full h-36 py-2 px-4 text-white bg-white bg-opacity-5 rounded-lg"
              ></textarea>
            </div>

            <div className="w-full flex justify-center items-center">
              <div
                onClick={handlePostSubmit}
                className="w-64 py-4 bg-white bg-opacity-10 rounded-lg flex items-center justify-center cursor-pointer"
              >
                <div className="text-white text-xl font-normal font-sans">
                  Post Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
