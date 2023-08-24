import { useState } from "react";

const HookCounterTwo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};

export default HookCounterTwo;
