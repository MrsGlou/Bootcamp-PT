import { useState } from "react";
import "./App.css";
import CodeUseRef from "./components/CodeUseRef";
import CodeRefFocus from "./components/CodeRefFocus";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CodeUseRef />
      <CodeRefFocus />
    </div>
  );
}

export default App;
