"use client";

import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  return (
    <div className="container flex items-center mx-auto max-w-3xl h-full">
      <div className="relative bg-white w-full h-fit p-4 rounded-lg space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Create a Community</h1>
        </div>

        <hr className="bg-zinc-500 h-px" />
      </div>
    </div>
  );
}
