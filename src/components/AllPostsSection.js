import React from "react";

const AllPostsSection = ({ allPosts, onPostClick }) => {
  return (
    <div className="w-96 h-96 bg-stone-950 rounded-tl-lg rounded-tr-lg flex flex-col items-center">
      <div className="text-white text-xl font-bold font-['Public Sans'] mb-4">
        All Post ({allPosts.length})
      </div>

      {allPosts.map((post) => (
        <div
          key={post._id}
          className="h-28 pl-8 pr-80 pt-4 pb-7 mb-4 bg-white bg-opacity-5 rounded-lg flex flex-col items-start gap-4"
          onClick={() => onPostClick(post._id)}
        >
          <div className="text-white text-opacity-50 text-xl font-bold font-['Public Sans']">
            {post.title}
          </div>
          <div className="text-white text-opacity-50 text-base font-normal font-['Public Sans']">
            {`${post.comments ? post.comments.length : 0} Comment ${
              post.replies ? post.replies.length : 0
            } Reply`}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPostsSection;
