import { useCallback, useState } from 'react';
import { ItemsList } from './ItemsList';

export default function MemoizedList() {
  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles = {
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    alignSelf: 'center',
    backgroundColor: colored ? 'yellowgreen' : 'transparent',
    border: '1px solid yellowgreen',
    transition: 'background-color 0.3s ease-in-out',
  };

  const generateItemsFromAPI = useCallback(
    () => new Array(count).fill('').map((_, i) => `Element ${i + 1}`),
    [count],
  );

  return (
    <div className="card">
      <h3 className="card__title">i am NewComp</h3>
      <h4>Number of elements: {count}</h4>

      <div className="card__wrapper">
        <button className="button" onClick={() => setCount((prev) => prev + 1)}>
          inc
        </button>

        <ItemsList getItems={generateItemsFromAPI} />
      </div>

      <div className="card__wrapper">
        <button className="button" onClick={() => setColored((prev) => !prev)}>
          change color
        </button>
        <div style={styles}></div>
      </div>
    </div>
  );
}
