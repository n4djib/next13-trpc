import { cache } from "react";

export const getData = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export const getTodos = async (label = "[]") => {
  console.log(" get todos ... ", label);

  const url = "https://jsonplaceholder.typicode.com/todos?_limit=7";
  return getData(url);
};

// export const getTodosFunctioned = (label?: string) => getTodos(label);

export const getTodosCached = cache((label?: string) => getTodos(label));

// export const todosSingletonPromise = getTodos("[test-fetch]");
