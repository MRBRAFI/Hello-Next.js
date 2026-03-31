import React from "react";

export default function Banner() {
  return (
    <div className="text-center space-y-5 bg-linear-60 to-amber-400 from-white text-black p-5 rounded">
      <h2 className="text-4xl font-bold">Welcome to DevStory</h2>
      <button className="hover:cursor-pointer bg-amber-400 text-black p-2 rounded font-semibold hover:bg-white transition duration-200">
        Share a story
      </button>
    </div>
  );
}
