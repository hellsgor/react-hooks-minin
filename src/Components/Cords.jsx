import { useState, useEffect } from 'react';

export default function Cords() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('ComponentDidMount');
    // с помощью useEffect можно эмулировать какие-либо life-siecle-hooks
    // например, можно эмулировать момент когда компонент закончил рендер и готов к работе.
    // Важно не передавать ничего в deps
    // Этот колл-бэк вызовется только один раз при рендере компонента

    window.addEventListener('mousemove', mouseMoveHandler);
    // то есть, при первом рендере компонента
    // добавляется слушатель события.

    // Важно только то, что любые добавленные слушатели событий нужно удалять
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  function mouseMoveHandler(event) {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <div className="cords card">
      <h3 className="card__title">i am cords</h3>

      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
}
