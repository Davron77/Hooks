import React from "react";

interface Type {
  title: string;
}

const Title: React.FC<Type> = ({ title = "Title" }) => {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      {title}
    </div>
  );
};

export default Title;
