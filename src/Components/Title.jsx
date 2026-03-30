import React from "react";

export default function Title({ children }) {
  return (
    <div className="bg-green-300 text-3xl font-semibold text-black py-5 px-4 text-center">
      {children}
    </div>
  );
}
