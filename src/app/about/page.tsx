"use client";

import React from "react";
import useRQGlobalState from "../../hooks/useRQGlobalState";

const AboutPage = () => {
  const [count] = useRQGlobalState("count", 3);

  return (
    <div>
      <h2>AboutPage</h2>
      <div>Count: {count}</div>
    </div>
  );
};

export default AboutPage;
