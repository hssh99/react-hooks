import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext(null);

export const ContextExample = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
      <div>
        <h1>Parent Component</h1>
        <ChildToggle />
        <ChildDisplay />
      </div>
    </GlobalStateContext.Provider>
  );
};

const ChildToggle = () => {
  const { setIsToggle } = useContext(GlobalStateContext);
  return (
    <div>
      <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
    </div>
  );
};

// Child Component to Display State
const ChildDisplay = () => {
  const { isToggle } = useContext(GlobalStateContext);
  return (
    <div>
      <p>Current State: {isToggle ? "ON" : "OFF"}</p>
    </div>
  );
};

/*
- prop drilling can cause unnecessary re-renders.
- useContext hook is good for small scale purposes. redux, zustand,
react query libraries are used for advanced state mgmt.

*/
