import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <h1 className="text-16xl text-pink-200 font-bold underline text-center">
      Hello GusBeing !!
    </h1>
  );
}

export default App;