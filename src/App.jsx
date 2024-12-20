import "./App.css";
import { StateExample } from "./hooks/use-state/index";
import { EffectExample } from "./hooks/use-effect/index";
import { ContextExample } from "./hooks/use-context/index";
import { ReducerExample } from "./hooks/use-reducer/index";
import { RefExample } from "./hooks/use-ref";

function App() {
  return (
    <>
      {/* <StateExample /> */}
      {/* <EffectExample /> */}
      {/* <ContextExample /> */}
      {/* <ReducerExample /> */}
      <RefExample />
    </>
  );
}

export default App;
