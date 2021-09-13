import { useEffect, useRef, useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);
  //   const [total, setTotal] = useState(-1);
  const total = useRef(0);

  useEffect(() => {
    total.current = total.current + 1;
  }, [count]);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  return (
    <div>
      <div>counter: {count}</div>
      <div>total clicks: {total.current}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
