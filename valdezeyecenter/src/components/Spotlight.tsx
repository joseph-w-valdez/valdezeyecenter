'use client'
import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { healthConditions } from '@/data/healthConditions';
import Link from 'next/link';

export default function Spotlight() {
  const [randomIndex, setRandomIndex] = useState<number>(Math.floor(Math.random() * healthConditions.length));
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const searchbarRef = useRef<HTMLInputElement>(null);

  // utility function to blur the input element
  const blurInputElement = () => {
    const inputElement = searchbarRef.current?.querySelector('input');
    if (inputElement) {
      inputElement.blur();
    }
  };

  const handleSelectionChange = (searchInput:string) => {
      // check if there is a match in the healthConditions data array with the typed or selected value to set the condition and blur it
      const matchedCondition = healthConditions.find((condition) => condition.name.toLowerCase() === searchInput?.toLowerCase());
      if (matchedCondition) {
        blurInputElement()
        setSelectedCondition(matchedCondition.name)
      }
};

  const loadNewCondition = () => {
    const newIndex = Math.floor(Math.random() * healthConditions.length);
    setRandomIndex(newIndex);
    handleSelectionChange('');
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col gap-12 w-2/3">
      <h1>
        {selectedCondition
          ? selectedCondition
          : healthConditions[randomIndex].name}
      </h1>
      <Autocomplete
        ref={searchbarRef}
        value={
          selectedCondition
            ? healthConditions.find((condition) => condition.name === selectedCondition) || null
            : null
        }
        onChange={(e) => handleSelectionChange((e.target as HTMLInputElement).innerText)}
        options={healthConditions}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            name='condition search'
            label="Search for conditions"
            variant="outlined"
            onChange={(e)=> handleSelectionChange(e.target.value)}
          />
        )}
      />
      <p className="text-xl min-h-[200px]">
        {selectedCondition
          ? healthConditions.find(
            (condition) => condition.name === selectedCondition
          )?.description || ''
          : healthConditions[randomIndex].description}
      </p>
      {selectedCondition === 'Smoking and Eye Health' && (
        <p className="text-red-600 text-lg">
          If you&apos;re a smoker, consider quitting to reduce your risk. Learn
          more about&nbsp;
          <Link
            href={
              healthConditions[randomIndex].url || '/not-found'
            }
            className="underline text-blue-600 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            smoking cessation
          </Link>
          .
        </p>
      )}
      <div className="flex justify-start w-full gap-8 flex-wrap">
        <a
          href={healthConditions[randomIndex].url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-xl underline text-blue-700 hover:text-blue-400"
        >
          Learn more here!
        </a>
        <button
          className="border border-2 border-black rounded-lg w-[200px] text-xl py-1 font-bold bg-blue-700 text-white hover:text-black hover:bg-blue-400"
          onClick={loadNewCondition}
        >
          New Condition
        </button>
      </div>
      <Link
        href="/"
        className="w-[100px] text-center border border-2 border-black rounded-lg text-xl py-1 font-bold bg-red-600 text-white hover:text-black hover:bg-red-400"
      >
        Go Back
      </Link>
    </div>
  );
}
