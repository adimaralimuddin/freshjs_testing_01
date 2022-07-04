/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Test from "../islands/Test.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { useState, useEffect } from "preact/hooks";

// interface User {
//   login: string;
//   name: string;
//   avatar_url: string;
// }

export const handler = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    console.log("resp ", resp);

    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user = await resp.json();
    return ctx.render(user);
  },
};

export default function Home({ data }) {
  console.log(data);

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        class="ring-1 mx-auto"
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6 ring-1 rounded-full p-5 bg-gray-100`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <Test start={4} />
    </div>
  );
}
