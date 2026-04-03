import Link from "next/link";

export default function StoryCard({ stories }) {
  return (
    <div className=" bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
      {/* Image */}
      <div className="flex items-center gap-4">
        <img
          src={stories.image}
          alt={stories.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-lg">{stories.name}</h2>
          <p className="text-sm text-gray-600">{stories.designation}</p>
          <p className="text-sm text-blue-600">{stories.company}</p>
        </div>
      </div>

      {/* Button */}
      <Link
        href={`/stories/${stories.id}`}
        className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
      >
        Read Full Story
      </Link>
    </div>
  );
}
