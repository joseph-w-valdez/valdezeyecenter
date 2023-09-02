'use client'
import { useState } from "react";
import { healthConditions } from "@/data/healthConditions";
import Link from "next/link";

export default function Spotlight() {
  const [randomIndex, setRandomIndex] = useState<number>(Math.floor(Math.random() * healthConditions.length));
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  const handleSelectionChange = (conditionName: string | null) => {
    setSelectedCondition(conditionName);
    setSearchTerm(""); // Clear search input after selecting a condition
  };

  const loadNewCondition = () => {
    const newIndex = Math.floor(Math.random() * healthConditions.length);
    setRandomIndex(newIndex);
    handleSelectionChange(null);
    window.scrollTo(0, 0);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const matchedCondition = healthConditions.find(condition =>
      condition.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (matchedCondition) {
      handleSelectionChange(matchedCondition.name);
    }
  };

  return (
    <div className="flex flex-col gap-12 w-2/3">
      <h1>{selectedCondition ? selectedCondition : healthConditions[randomIndex].name}</h1>
      <form onSubmit={handleSearchSubmit} className="text-2xl">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for conditions"
          className="border border-gray-300 rounded-lg p-2 mr-8"
          list="condition-list"
        />
        <datalist id="condition-list">
          {healthConditions.map(condition => (
            <option key={condition.name} value={condition.name} />
          ))}
        </datalist>
        <button
          type="submit"
          className="border border-2 border-black rounded-lg w-[200px] text-xl py-1 font-bold bg-blue-700 text-white hover:text-black hover:bg-blue-400"
        >
          Search
        </button>
      </form>

      <p className="text-2xl min-h-[200px]">
        {selectedCondition
          ? healthConditions.find(condition => condition.name === selectedCondition)?.description || ""
          : healthConditions[randomIndex].description}
      </p>
      {healthConditions[randomIndex].smokingCessation && (
        <p className="text-red-600 text-lg">
          If you&apos;re a smoker, consider quitting to reduce your risk.
          Learn more about <Link href={healthConditions[randomIndex].smokingCessation.url} className="underline text-blue-600 hover:text-blue-400" target="_blank" rel="noopener noreferrer">smoking cessation</Link>.
        </p>
      )}
      <div className="flex justify-start w-full gap-8 flex-wrap">
        <a href={healthConditions[randomIndex].url} target="_blank" rel="noopener noreferrer" className="w-fit text-xl underline text-blue-700 hover:text-blue-400">Learn more here!</a>
        <button
          className="border border-2 border-black rounded-lg w-[200px] text-xl py-1 font-bold bg-blue-700 text-white hover:text-black hover:bg-blue-400"
          onClick={loadNewCondition}
        >
          New Condition
        </button>
      </div>
      <Link
        href="/"
        className="w-[100px] text-center border border-2 border-black rounded-lg text-xl py-1 font-bold bg-blue-700 text-white hover:text-black hover:bg-blue-400"
      >
        Go Back
      </Link>
    </div>
  );
}
