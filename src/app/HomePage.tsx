// import styles from "./page.module.css";
import RQ from "./components/RQ";
import Trpc from "./components/Trpc";
import { getTodos, getTodosCached } from "../lib/apis";

export default async function HomePage() {
  const todos = await getTodosCached("[Home Page]");
  // const todos2 = await getTodosCached("[Home Page]");
  // const todos3 = await getTodosCached("[Home Page]");

  // todos2[0].title = "--------";

  return (
    <>
      {/* {JSON.stringify(todos2[0])}
      <br />
      {JSON.stringify(todos3[0])} */}
      <h1>Home Page NextJs 13 tRPC</h1>

      <Trpc />
      <br />
      <RQ todos={todos} />
    </>
  );
}
