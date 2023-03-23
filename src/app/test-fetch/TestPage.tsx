"use client";

import React, { use } from "react";
import {
  getTodos,
  // getTodosCached,
  //  getTodosFunctioned,
  // todosSingletonPromise,
} from "../../lib/apis";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const todosPromise = getTodos("[test-fetch]");

const TestPage = () => {
  const todos = use(todosPromise);
  // const todos = use(getTodos("[test-fetch]"));
  // const todos = use(getTodosFunctioned("[test-fetch]"));
  /* cache is not building */
  // const todos = use(getTodosCached("[test-fetch]"));

  return (
    <>
      <h2>Test Page</h2>
      <div>
        {todos &&
          todos.map((todo: Todo) => (
            <div key={todo.id}>
              {todo.id} - {todo.title}
            </div>
          ))}
      </div>
    </>
  );
};

export default TestPage;
