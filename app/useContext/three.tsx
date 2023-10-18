import { useUserContext } from "@/context/useUserContext";
import React from "react";

const Three = () => {
  const user = useUserContext();

  return <div>name: {user.name}</div>;
};

export default Three;
