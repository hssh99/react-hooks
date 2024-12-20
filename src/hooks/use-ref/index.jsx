import { useEffect, useRef, useState } from "react";

// export const RefExample = () => {
//   const onClick = () => {
//     inputRef.current.value = "Harshal";
//   };
//   const inputRef = useRef();

//   useEffect(() => {
//     console.log("Page rerendered");
//   });

//   return (
//     <>
//       <input type="text" ref={inputRef} />;
//       <button onClick={onClick}>Console Log</button>
//     </>
//   );
// };

// 2nd usecase

export const RefExample = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <>
      <p> Count: {count}</p>
      <p> Previous Count: {previousCount.current} </p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};

/**
 * useRef is mainly used for acessing dom elements directly
 * stores the previous value of states even if the component
re-renders. useRef wont re-render when the value is changed.
 */
