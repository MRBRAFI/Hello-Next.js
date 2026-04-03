import React from "react";

export default function Title({ children }) {
  return (
    <div className="text-center text-2xl font-bold space-y-5 bg-linear-60 to-amber-400 from-white text-black p-5 rounded">
      {children}
    </div>
  );
}
