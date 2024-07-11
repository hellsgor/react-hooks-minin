import { useState } from 'react';

function computedInitialCounter() {
  console.log('Some calculations...');
  return 5 - 5;
}

export default function Counter() {
  // const [counter, setCounter] = useState(0);
  // передано начальное значение счётчика в виде числа

  // const [counter, setCounter] = useState(computedInitialCounter());
  // предположим, что хотим вычислять начальное значение счётчика.
  // функция computedInitialCounter будет запускаться каждый новый рендеринг, что увеличит используемые ресурсы

  const [counter, setCounter] = useState(() => computedInitialCounter());
  // передать в качестве начального значения call-back-функцию
  // то начальное значение будет вычислено только один раз при первом рендере страницы

  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
    // setCounter возвращает предыдущее состояние
    // и чтобы всегда работать именно с предыдущим состоянием можно использовать конструкцию выше
  }

  function decrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  function doubleIncrement() {
    increment();
    increment();
  }

  return (
    <div className="counter card">
      <h3 className="counter-title">i am counter: {counter}</h3>
      <div className="counter-wrapper">
        <button className="button" onClick={increment}>
          inc
        </button>
        <button className="button" onClick={doubleIncrement}>
          double inc
        </button>
        <button className="button" onClick={decrement}>
          dec
        </button>
      </div>
    </div>
  );
}
