"use client";

import React, { use } from "react";
import { useQuery } from "@tanstack/react-query";
import useRQGlobalState from "../../hooks/useRQGlobalState";
import { getTodos } from "../../lib/apis";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type RQProps = {
  todos: Todo[];
};

// const todosPromise = getTodos("[promise]");

const RQ = ({ todos: initialTodos }: RQProps) => {
  // // can't place use() above other hooks
  // const initialTodos2 = use(todosPromise);

  const {
    // isLoading,
    // isError,
    data: todos,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos("[queryFn]"),
    initialData: initialTodos,
  });

  const [count, setCount] = useRQGlobalState("count", 5);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>isError...</div>;

  return (
    <div>
      <h2>
        RQTest in APP Dir [Count: {count}] 
        <button onClick={() => setCount(count + 1)}>Increment</button> 
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </h2>
      {todos &&
        todos.map((todo: Todo) => (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        ))}
    </div>
  );
};

export default RQ;
