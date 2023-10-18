"use client";

import React, { useEffect, useState } from "react";
import Two from "./two";
import { UserContext } from "@/context/useUserContext";

const One = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("first");

    return () => {
      console.log("second");
    };
  }, [count]);

  return (
    <div>
      <UserContext.Provider
        value={{
          name: "You",
          isHuman: true,
        }}
      >
        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
        <Two />
      </UserContext.Provider>
    </div>
  );
};

export default One;
