// SinglePost.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = ({ postId }) => {
  const [postDetails, setPostDetails] = useState(null);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    // Fetch post details using the post ID
    axios
      .get(`http://localhost:3001/fetch-post/${postId}`)
      .then((response) => setPostDetails(response.data.post))
      .catch((error) => console.error("Error fetching post details:", error));

    // Fetch the total number of posts
    axios
      .get("http://localhost:3001/fetch-all-posts")
      .then((response) => setTotalPosts(response.data.posts))
      .catch((error) => console.error("Error fetching total posts:", error));
  }, [postId]);

  if (!postDetails) {
    return <div className="text-white">Loading post details...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-4/5 h-4/5 relative rounded-lg flex">
        <div className="w-96 h-96 bg-black">
          <div className="pl-5 pr-3 pt-3.5 absolute left-20 top-8 bg-stone-950 rounded-tl-lg rounded-tr-lg flex-col justify-end items-start gap-8 inline-flex">
            <div className="AllPostCount text-white text-xl font-bold font-['Public Sans']">
              All Posts ({totalPosts.length})
            </div>
            <div className="w-96 h-96 bg-white bg-opacity-5 rounded-lg flex-col justify-start items-start flex">
              <div className="ThisIsPostTitle text-white text-opacity-50 text-xl font-bold font-['Public Sans']">
                {postDetails.title}
              </div>
              <div className=" text-white text-opacity-50 text-base font-normal font-['Public Sans']">
                {postDetails.description}
              </div>
              <div className=" text-white text-opacity-50 text-base font-normal font-['Public Sans']">
                {`${
                  postDetails.comments ? postDetails.comments.length : 0
                } Comment ${
                  postDetails.replies ? postDetails.replies.length : 0
                } Reply`}
              </div>
              <div className="Comments text-white text-opacity-50 text-base font-bold font-['Public Sans']">
                Comments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
