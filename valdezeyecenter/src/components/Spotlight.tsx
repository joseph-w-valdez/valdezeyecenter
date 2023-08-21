'use client'
import { useState } from "react";
import { healthConditions } from "@/data/healthConditions";
import Link from "next/link";

export default function Spotlight() {
  const [randomIndex, setRandomIndex] = useState<number>(Math.floor(Math.random() * healthConditions.length));
  const randomCondition = healthConditions[randomIndex];

  const loadNewCondition = () => {
    const newIndex = Math.floor(Math.random() * healthConditions.length);
    setRandomIndex(newIndex);
    window.scrollTo(0, 0)
  };

  return (
      <div className="flex flex-col gap-12 w-2/3">
        <h1>Wellness Spotlight: <span>{randomCondition.name}</span></h1>
        <p className="text-2xl min-h-[200px]">{randomCondition.description}</p>
        <a href={randomCondition.url} target="_blank" rel="noopener noreferrer" className="w-fit text-xl underline text-blue-700 hover:text-blue-400">Learn more here!</a>
        <button
          className="border border-2 border-black rounded-lg w-[200px] text-xl py-1 font-bold bg-blue-700 text-white hover:text-black hover:bg-blue-400"
          onClick={loadNewCondition}
        >
          New Condition
        </button>
        <Link
          href="/"
          className="w-[100px] text-center border border-2 border-black rounded-lg text-xl py-1 font-bold bg-blue-700 text-white hover:text-black hover:bg-blue-400"
        >
          Go Back
        </Link>
    </div>
  );
}
