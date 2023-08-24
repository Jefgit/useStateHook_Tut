import { useState } from "react";

const HookCounter = () => {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(count + 1)}>Counter {count}</button>
    </div>
  );
};

export default HookCounter;
