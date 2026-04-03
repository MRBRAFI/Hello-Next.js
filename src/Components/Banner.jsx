"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Banner() {
  const router = useRouter();
  const handleBtn = () => {
    const password = prompt("Enter Your Password");

    if (Number(password) === 1111) {
      alert("User login successful");
      console.log(router);
      router.push("/dashboard");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="text-center space-y-5 bg-linear-60 to-red-400 from-white text-black p-5 rounded">
      <h2 className="text-4xl font-bold">Welcome to DevStory</h2>
      <button
        onClick={handleBtn}
        className="hover:cursor-pointer bg-red-400 text-black p-2 rounded font-semibold hover:bg-white transition duration-200"
      >
        Share a story
      </button>
    </div>
  );
}
