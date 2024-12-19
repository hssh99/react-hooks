import { useState } from "react";

export const StateExample = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  };
  return (
    <div>
      <p> Count: {count}</p>
      <button onClick={increaseCounter}> Increase Counter </button>
    </div>
  );
};
