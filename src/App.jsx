import './App.css';
import AutoFocus from './Components/AutoFocus';
import Cords from './Components/Cords';
import Counter from './Components/Counter';
import MemoizedCounter from './Components/MemoizedCounter';
import ObjectState from './Components/ObjectState';
import PreviousValue from './Components/PreviousValue';
import RenderCounter from './Components/RenderCounter';
import Resource from './Components/Resource';
import MemoizedList from './Components/MemoizedList';
import AlertWrapper from './Components/AlertWrapper';
import Alert from './Components/Alert/Alert';
import { AlertProvider } from './Components/Alert/AlertProvider';
import AlertWithReducer from './Components/AlertWithReducer';
import { AlertReducerProvider } from './Components/AlertReducer/AlertReducerProvider';
import AlertReducer from './Components/AlertReducer/AlertReducer';

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

      <div className="row">
        <h2 className="row__title">useRef:</h2>
        <div className="wrapper">
          <RenderCounter />
          <AutoFocus />
          <PreviousValue />
        </div>
      </div>

      <div className="row">
        <h2 className="row__title">useMemo:</h2>
        <div className="wrapper">
          <MemoizedCounter />
        </div>
      </div>

      <div className="row">
        <h2 className="row__title">useCallback:</h2>
        <div className="wrapper">
          <MemoizedList />
        </div>
      </div>

      <div className="row">
        <h2 className="row__title">useContext:</h2>
        <div className="wrapper">
          <AlertProvider>
            <Alert />
            <AlertWrapper />
          </AlertProvider>
        </div>
      </div>

      <div className="row">
        <h2 className="row__title">useReducer:</h2>
        <div className="wrapper">
          <AlertReducerProvider>
            <AlertReducer />
            <AlertWithReducer />
          </AlertReducerProvider>
        </div>
      </div>
    </>
  );
}
