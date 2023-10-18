"use client";
import React, { useState, useCallback } from "react";
import Title from "@/components/ui/Title";
import ChildComponent from "./child-component";
import Container from "@/components/ui/Container";

const Page = () => {
  const [count, setCount] = useState(0);

  const handleChange = () => setCount((prev) => prev + 1);

  const handleRerender = useCallback(() => {
    console.log("hi, Re-render!!! ", count);
  }, [count]);

  // const handleRerender = () => {
  //   console.log("hi, Re-render!!! ", count);
  // };

  return (
    <Container>
      <Title title="useCallBack" />
      <div className="flex flex-col items-center gap-5">
        <h1>{count}</h1>
        <button onClick={handleChange}>click!</button>
        <button onClick={handleRerender}>Re-render!!!</button>
        <ChildComponent />
      </div>
    </Container>
  );
};

export default Page;
