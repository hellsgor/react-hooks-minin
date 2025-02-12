import { useEffect, useState } from 'react';

export default function Resource() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    // .then(() => console.log(data));
  }, [type]);
  // useEffect служит для каких-либо сайд-эффектов
  // то есть наблюдая за чем-то можно реагировать на изменения и выполнять какую-то логику

  return (
    <div className="resource card">
      <h3 className="card__title">i am Resource</h3>

      <div className="resource__wrapper card__wrapper">
        <button
          className={type === 'users' ? 'button button_active' : 'button'}
          onClick={() => setType('users')}
        >
          users
        </button>
        <button
          className={type === 'todos' ? 'button button_active' : 'button'}
          onClick={() => setType('todos')}
        >
          todos
        </button>
        <button
          className={type === 'posts' ? 'button button_active' : 'button'}
          onClick={() => setType('posts')}
        >
          posts
        </button>
      </div>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
