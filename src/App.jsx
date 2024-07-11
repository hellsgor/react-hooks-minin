import './App.css';
import Cords from './Components/Cords';
import Counter from './Components/Counter/Counter';
import ObjectState from './Components/ObjectState/ObjectState';
import Resource from './Components/Resource/Resource';

export default function App() {
  return (
    <>
      <h1>Hello, React Hooks!</h1>

      <div className="row">
        <h2 className="row__title">useState:</h2>
        <div className="wrapper">
          <Counter />
          <ObjectState />
        </div>
      </div>

      <div className="row">
        <h2 className="row__title">useEffect:</h2>
        <div className="wrapper">
          <Resource />
          <Cords />
        </div>
      </div>
    </>
  );
}
