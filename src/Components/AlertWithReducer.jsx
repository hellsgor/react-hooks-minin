import { useEffect } from 'react';
import { useAlert } from './Alert/AlertContext';

export default function AlertWithReducer() {
  const { toggle, setAlertMessage } = useAlert();

  useEffect(
    () => setAlertMessage('Hello from AlertWithReducer'),
    [setAlertMessage],
  );

  return (
    <div className="card">
      <h3 className="card__title">i am AlertWithReducer</h3>
      <button className="button" onClick={toggle}>
        Alert
      </button>
    </div>
  );
}
