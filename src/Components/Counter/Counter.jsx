import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  function doubleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div className="counter">
      <h3 className="counter-title">i am counter: {counter}</h3>
      <div className="counter-wrapper">
        <button onClick={increment}>inc</button>
        <button onClick={doubleIncrement}>double inc</button>
        <button onClick={decrement}>dec</button>
      </div>
    </div>
  );
}
