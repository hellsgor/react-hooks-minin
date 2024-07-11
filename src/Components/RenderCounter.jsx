import { useEffect, useRef, useState } from 'react';

export default function RenderCounter() {
  const [inputValue, setInputValue] = useState('');
  const renderCount = useRef(1);
  // useRef очень похож на useState, он тоже создаёт состояние.

  // useRef возвращает объект, и к текущему состоянию можно обратиться через свойство current

  // состояния определённые через хук useRef сохраняются между рендерами компонента,
  // но изменение состояния не вызывает новый рендер.
  // То есть, если нужно сохранить что-то между рендерами,
  // и при этом не перерисовывать компонент - используем useRef.

  useEffect(() => {
    renderCount.current++;
  });
  return (
    <div className="resource card">
      <h3 className="card__title">i am render counter</h3>

      <h4>render number: {renderCount.current}</h4>

      <input
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        placeholder="type something"
      />
    </div>
  );
}
