/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface Test {
  start: number;
}

export default function Test(props: Test) {
  //   const [notes, setNotes] = useState([{ text: "hi", status: "active" }]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("effect");
    getTodos();
  }, []);

  async function getTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    console.log(todos);
    setNotes(todos);
  }
  return (
    <div
      class={tw`flex gap-2 w-full p-2 rounded-md bg-gray-100 flex flex-col flex flex-col`}
    >
      {notes?.map((note) => (
        <div class={tw`bg-white p-1 text-sm rounded-md text-gray-500`}>
          <p>{note?.title}</p>
        </div>
      ))}
    </div>
  );
}
