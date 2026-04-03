import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center">
      <Link href={"/"} className="text-lg font-semibold">
        🐳 Dev-Story
      </Link>

      <nav className="flex gap-8">
        <Link href="/about_us" className="text-xl font-semibold">
          About us
        </Link>
        <Link href="/stories" className="text-xl font-semibold">
          Stories
        </Link>
        <Link href="/tutorials" className="text-xl font-semibold">
          Tutorials
        </Link>
        <Link href="/login" className="text-xl font-semibold">
          Login
        </Link>
        <Link href="/register" className="text-xl font-semibold">
          Register
        </Link>
      </nav>
    </header>
  );
}
