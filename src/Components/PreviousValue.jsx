import { useEffect, useRef, useState } from 'react';

export default function PreviousValue() {
  const [value, setValue] = useState('');

  const inputPrevValue = useRef('');

  useEffect(() => {
    setValue((prev) => (inputPrevValue.current = prev));
  }, [value]);

  return (
    <div className="previous-value card">
      <h3 className="previous-value__title">i am PreviousValue</h3>

      <input
        type="text"
        placeholder="type something"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />

      <h4 style={{ alignSelf: 'flex-start' }}>Previous value: {inputPrevValue.current}</h4>
    </div>
  );
}
