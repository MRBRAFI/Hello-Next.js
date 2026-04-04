import Link from "next/link";
import React from "react";

export default function NavLink({ href, children }) {
  return <Link href={href}>{children}</Link>;
}
