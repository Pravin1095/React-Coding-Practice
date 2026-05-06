import { useState } from "react";
import ChildCount from "./ChildCount";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count >= 10) {
      return;
    }
    setCount((prev) => prev + 1);
  };
  const decrementCount = () => {
    if (count == 0) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const msg = count >= 10;
  return (
    <>
      <h1>{count}</h1>
      {msg && <h2>Limit is reached</h2>}
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
      <ChildCount />
    </>
  );
};

export default Counter;
