import React from "react";
import { trpc } from "../utils/trpc/trpcPagesDir";

const testTrpc = () => {
  const hello = trpc.hello.greet.useQuery({ text: "N4djib" });
  const hello2 = trpc.hello.greet.useQuery();
  const greeting = trpc.greeting.useQuery();

  if (!hello.data) return <div>Loading...</div>;
  if (!hello2.data) return <div>Loading...</div>;
  if (!greeting.data) return <div>Loading...</div>;

  return (
    <>
      <h2>test-trpc Pages (old)</h2>
      <div>[Hello API 1] {hello.data.message}</div>
      <div>[Hello API 2] {hello2.data.message}</div>
      <div>[Greeting API] {greeting.data.greeting}</div>
    </>
  );
};

export default testTrpc;
