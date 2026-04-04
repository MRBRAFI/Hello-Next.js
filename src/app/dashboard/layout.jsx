import NavLink from "@/Components/NavLink";
import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-3 p-5 rounded-xl border-2 border-white mr-2">
        <Link
          href={"/dashboard"}
          className="text-xl w-full font-bold text-amber-400"
        >
          Dev_Story
          <div className="w-full border-b-2 border-amber-400 my-3"></div>
        </Link>

        <div className="flex flex-col text-red-400 justify-center">
          <NavLink href={"/"}>Home Page</NavLink>
          <NavLink href={"/dashboard/add-story"}>Add Story</NavLink>
          <NavLink href={"/dashboard/my-profile"}>My Profile</NavLink>
          <NavLink href={"/dashboard/settings"}>Settings</NavLink>
        </div>
      </div>
      <div className="col-span-9 p-5 rounded-xl border-2 border-white mr-2">
        {children}
      </div>
    </div>
  );
}
