import { healthConditions } from "@/data/healthConditions";
import Link from "next/link";

/* Use this component to quickly test all links and get a list of all conditions*/
export default function TestSpotlights() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Test All Links:</h2>
      {healthConditions.map((condition, index) => (
        <div key={index} className="flex gap-4">
          <h3 className="text-lg font-medium">{condition.name}</h3>
          <Link href={condition.url} className="text-blue-700 underline hover:text-blue-400" target="_blank" rel="noopener noreferrer">
            Test Link
          </Link>
        </div>
      ))}
      <div className="mt-4 text-base">
        <h3 className=" font-medium">List of Conditions:</h3>
        <ul className="list-disc ml-6">
          {healthConditions.map((condition, index) => (
            <li key={index}>{condition.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
