"use client";

import React, { useState } from "react";
import useRQGlobalState from "@/hooks/useRQGlobalState";

const TestState = () => {
  const [counter, setCounter] = useRQGlobalState("count", 5);

  const handleClick = () => {
    setCounter(counter + 1);
    setCounter((prevCounter: any) => prevCounter + 1);
    setCounter((prevCounter: any) => prevCounter + 1);
  };

  return (
    <div>
      <h2>Test State Page</h2>
      <div>
        <button onClick={handleClick}>Add (+3)</button>
        <div>Counter: {counter}</div>
      </div>
    </div>
  );
};

export default TestState;
