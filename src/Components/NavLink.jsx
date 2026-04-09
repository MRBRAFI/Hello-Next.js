"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ href, children }) {
  const pathName = usePathname();

  return (
    <Link
      className={`${pathName.startsWith(href) && "border-b-2 border-cyan-500 px-1"}`}
      href={href}
    >
      {children}
    </Link>
  );
}
