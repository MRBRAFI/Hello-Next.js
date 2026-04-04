"use client";

import DashboardLayout from "@/app/dashboard/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

export default function Header() {
  const pathName = usePathname();
  console.log(pathName);

  if (pathName.startsWith("/dashboard")) {
    return <></>;
  }
  return (
    <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center">
      <Link href={"/"} className="text-lg font-semibold">
        🐳 Dev-Story
      </Link>

      <nav className="flex gap-8">
        <NavLink href="/about_us" className="text-xl font-semibold">
          About us
        </NavLink>
        <NavLink href="/stories" className="text-xl font-semibold">
          Stories
        </NavLink>
        <NavLink href="/tutorials" className="text-xl font-semibold">
          Tutorials
        </NavLink>
        <NavLink href="/login" className="text-xl font-semibold">
          Login
        </NavLink>
        <NavLink href="/register" className="text-xl font-semibold">
          Register
        </NavLink>
      </nav>
    </header>
  );
}
