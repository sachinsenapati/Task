// DashboardPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AllPostsSection from "./AllPostsSection";
import CreatePost from "./CreatePost";
import SinglePost from "./SinglePost";

const DashboardPage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    // Fetch All Posts API using Axios
    axios
      .get("http://localhost:3001/fetch-all-posts")
      .then((response) => setAllPosts(response.data.posts))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleSectionClick = (section) => {
    if (section === "createPost") {
      setShowCreatePost(true);
      setSelectedPostId(null); // Clear selected post ID when switching to Create Post section
    } else {
      setShowCreatePost(false);
      // Add logic for other sections if needed
      setSelectedPostId(null); // Clear selected post ID when switching to other sections
    }
  };

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex w-4/5 h-4/5">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col items-center">
          {/* All Posts Section */}
          <div
            className={`w-72 pl-8 pr-10 py-4 mb-4 bg-white bg-opacity-10 rounded-lg flex items-center cursor-pointer`}
            onClick={() => handleSectionClick("allPosts")}
          >
            <div className="text-white text-opacity-80 text-xl font-normal font-sans">
              All Posts
            </div>
          </div>

          {/* Commented Post Section */}
          <div
            className={`pl-8 pr-10 py-4 mb-4 bg-white bg-opacity-10 rounded-lg flex items-center cursor-pointer`}
            onClick={() => handleSectionClick("commentedPosts")}
          >
            <div className="text-white text-opacity-80 text-xl font-normal font-sans">
              Your Commented Posts
            </div>
          </div>

          {/* Replied Post Section */}
          <div
            className={`pl-8 pr-10 py-4 mb-4 bg-white bg-opacity-10 rounded-lg flex items-center cursor-pointer`}
            onClick={() => handleSectionClick("repliedPosts")}
          >
            <div className="text-white text-opacity-80 text-xl font-normal font-sans">
              Your Replied Posts
            </div>
          </div>

          {/* Create Post Section */}
          <div
            className="h-14 pl-10 pr-10 py-4 mb-4 rounded-lg border border-white border-opacity-50 flex items-start gap-2.5 cursor-pointer"
            onClick={() => handleSectionClick("createPost")}
          >
            <div className="w-6 h-6 rounded-full border border-white border-opacity-50" />
            <div className="text-white text-opacity-80 text-xl font-bold font-sans">
              Create Post
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 h-full flex flex-col items-center">
          {/* Display CreatePost component if showCreatePost is true */}
          {showCreatePost ? (
            <CreatePost onClose={() => setShowCreatePost(false)} />
          ) : (
            <>
              {/* Display SinglePost component if selectedPostId is not null */}
              {selectedPostId ? (
                <SinglePost postId={selectedPostId} />
              ) : (
                <AllPostsSection
                  allPosts={allPosts}
                  onPostClick={handlePostClick}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
