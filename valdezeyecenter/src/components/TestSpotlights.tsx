import { healthConditions } from "@/data/healthConditions";
import Link from "next/link";

/* Use this component to quickly test all links and get a list of all conditions*/
export default function TestSpotlights() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Test All Links: (will be hidden in deployment)</h2>
      {healthConditions.map((condition, index) => (
        <div key={index} className="flex flex-col gap-4 py-8">
          <h3 className="text-3xl font-medium">
            {index + 1}. {condition.name}
          </h3>
          <p className="text-gray-600 text-xl">{condition.description}</p>
          <Link
            href={condition.url}
            className="text-blue-700 underline hover:text-blue-400 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test Link
          </Link>
        </div>
      ))}
      {/* list of just condition names */}
      <div className="mt-4 text-base">
        <h3 className="font-medium">List of Conditions:</h3>
        <ol className="list-decimal ml-6">
          {healthConditions.map((condition, index) => (
            <li key={index}>{condition.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
