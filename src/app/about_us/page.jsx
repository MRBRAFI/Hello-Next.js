import Title from "@/Components/Title";
import Link from "next/link";
import React from "react";

export default function About_Us() {
  return (
    <div>
      <Title>This is About Us page</Title>

      <nav className="flex gap-5 my-5 font-semibold">
        <Link href={"/about_us/contact"}>Contact us</Link>
        <Link href={"/about_us/team"}>Our Team</Link>
      </nav>
    </div>
  );
}
