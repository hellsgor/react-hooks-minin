import { useState, useMemo } from 'react';

function complexCompute(num) {
  console.log('complexCompute');
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

export default function MemoizedCounter() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => complexCompute(number), [number]);

  const styles = useMemo(() => {
    console.log('Create styles');
    return {
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
      alignSelf: 'center',
      backgroundColor: colored ? 'yellowgreen' : 'transparent',
      border: '1px solid yellowgreen',
      transition: 'background-color 0.3s ease-in-out',
    };
  }, [colored]);

  return (
    <div className="card">
      <h3 className="card__title">i am NewComp</h3>
      <h4>Computed property: {computed}</h4>

      <div className="card__wrapper">
        <button
          className="button"
          onClick={() => setNumber((prev) => prev + 1)}
        >
          inc
        </button>
        <button
          className="button"
          onClick={() => setNumber((prev) => prev - 1)}
        >
          dec
        </button>
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
