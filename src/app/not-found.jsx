import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h2 className="text-6xl text-center text-red-500 animate-pulse transition duration-300">
        Page Not Found
      </h2>
      <Link href={"/"} className="text-2xl text-cyan-400 mt-2">
        Get back to home
      </Link>
    </div>
  );
}
