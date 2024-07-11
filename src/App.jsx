import './App.css';
import Counter from './Components/Counter/Counter';
import ObjectState from './Components/ObjectState/ObjectState';

export default function App() {
  return (
    <>
      <h1>Hello, React Hooks!</h1>
      <div className="row">
        <h2 className="row__title">useState:</h2>
        <Counter />
        <ObjectState />
      </div>
    </>
  );
}
