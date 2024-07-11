import { useEffect, useState } from 'react';

export default function Resource() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(() => console.log(data));
  }, [type]);
  // useEffect служит для каких-либо сайд-эффектов
  // то есть наблюдая за чем-то можно реагировать на изменения и выполнять какую-то логику

  useEffect(() => {
    console.log('ComponentDidMount');
    // с помощью useEffect можно эмулировать какие-либо life-siecle-hooks
    // например, можно сэмулировать момент когда компонент полностью зарэндерился и готов к работе.
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
    <div className="resource card">
      <h3 className="resource__type">type: {type}</h3>

      <div className="resource__wrapper card__wrapper">
        <button className={type === 'users' ? 'button button_active' : 'button'} onClick={() => setType('users')}>
          users
        </button>
        <button className={type === 'todos' ? 'button button_active' : 'button'} onClick={() => setType('todos')}>
          todos
        </button>
        <button className={type === 'posts' ? 'button button_active' : 'button'} onClick={() => setType('posts')}>
          posts
        </button>
      </div>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
}
