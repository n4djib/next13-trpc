"use client";

import React from "react";
import { trpc } from "../utils/trpcClient";

const TrpcTest = () => {
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
  const hello3 = trpc.hello.greet.useQuery({ text: "N4djibddd" });
  const hello4 = trpc.hello.greet.useQuery();
  const greeting = trpc.greeting.useQuery();

  // if (!hello.data) return <div>Loading...</div>;
  // if (!hello2.data) return <div>Loading...</div>;
  // if (!greeting.data) return <div>Loading...</div>;

  return (
    <div>
      <div>-TrpcTest in APP Dir</div>
      <div>[Hello API 1] {hello.data && hello.data.message}</div>
      <div>[Hello API 2] {hello2.data && hello2.data.message}</div>
      <div>[Hello API 3] {hello3.data && hello3.data.message}</div>
      <div>[Hello API 4] {hello4.data && hello4.data.message}</div>
      <div>[Greeting API] {greeting.data && greeting.data.greeting}</div>
    </div>
  );
};

export default TrpcTest;
