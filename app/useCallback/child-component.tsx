import { memo } from "react";

const ChildComponent = () => {
  console.log("Re-rendered!");
  return <div>ChildComponent</div>;
};

export default memo(ChildComponent);
