"use client";

import React from "react";
import { trpc } from "../../utils/trpc/trpcAppDir";
import useRQGlobalState from "../../hooks/useRQGlobalState";

const Trpc = () => {
  const hello = trpc.hello.greet.useQuery(
    { text: "N4djib" },
    {
      // enabled: false,
      // refetchInterval: 3000,
      // staleTime: 2000,
      initialData: { message: "----- initial Data -----" },
      // onSuccess: (data) => {
      //   console.log("hello onSuccess...");
      // },
    }
  );
  const hello2 = trpc.hello.greet.useQuery();
  const greeting = trpc.greeting.useQuery();

  // if (!hello.data) return <div>Loading...</div>;
  // if (!hello2.data) return <div>Loading...</div>;
  // if (!greeting.data) return <div>Loading...</div>;

  const [count] = useRQGlobalState("count", 10);

  return (
    <div>
      <h2>TrpcTest in APP Dir [Count: {count}]</h2>
      <div>[Hello API 1] {hello.data && hello.data.message}</div>
      <div>[Hello API 2] {hello2.data && hello2.data.message}</div>
      <div>[Greeting API] {greeting.data && greeting.data.greeting}</div>
    </div>
  );
};

export default Trpc;
