import React, { ReactNode } from "react";

interface Type {
  children: ReactNode;
}

const Container: React.FC<Type> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
