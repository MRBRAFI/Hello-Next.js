import Title from "@/Components/Title";
import React from "react";

export default async function TutorialPage({ params }) {
  //   const { technology, topic, page_no, subject } = await params;

  const { slug } = await params;

  const [technology, topic, page_no, subject] = slug || [];

  console.log(slug);

  console.log(technology, topic, page_no, subject);

  return (
    <div>
      <Title>This is Tutorial Page</Title>
      <div>
        <h2 className="text-5xl font-bold text-red-400 text-center border-2 border-amber-400 my-5 p-5">
          {technology} tutorial
        </h2>

        <div className="text-center border-2 border-red-400 p-4">
          <div className="flex gap-5 items-center justify-center">
            <h2 className="text-2xl font-bold text-amber-400">{topic}</h2>
            <h2 className="text-2xl font-bold text-amber-400">{subject}</h2>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-400">{page_no}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
