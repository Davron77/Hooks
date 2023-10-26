"use client";

import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";
import { useReducer } from "react";

type State = {
  count: number;
  error: boolean | null;
};

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      let newCount = state.count + 1;
      let newError = newCount > 5;
      return {
        ...state,
        count: newError ? state.count : newCount,
        error: newError ? newError : null,
      };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const Page = () => {
  const initialState = { count: 0, error: null };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <Title title="useReducer" />
      <div className="flex flex-col items-center gap-5">
        <p>Count: {state.count}</p>
        {state.error && <p className="text-red-600">Maximum number</p>}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </Container>
  );
};

export default Page;
