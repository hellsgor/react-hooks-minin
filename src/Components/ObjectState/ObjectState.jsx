import { useState } from 'react';

export default function ObjectState() {
  const [state, setState] = useState({
    name: 'John',
    date: Date.now(),
  });

  function updateName() {
    setState((prevState) => ({ ...prevState, name: 'Sara' }));
    // при изменении состояния объекта
    // важно вернуть новый объект чтобы изменилась ссылка, а не мутировать уже созданный объект
    // при этом, чтобы работать с актуальным данными / состоянием следует получать из функции set предыдущее состояние
  }

  return (
    <div className="object-state card">
      <h3 className="object-state__title">i am object-state</h3>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={updateName}>setName</button>
    </div>
  );
}
