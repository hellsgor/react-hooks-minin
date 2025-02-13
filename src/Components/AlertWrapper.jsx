import { useEffect } from 'react';
import { useAlert } from './Alert/AlertContext';

export default function AlertWrapper() {
  const { toggle, setAlertMessage } = useAlert();

  useEffect(
    () => setAlertMessage('Hello from AlertWrapper'),
    [setAlertMessage],
  );

  return (
    <div className="card">
      <h3 className="card__title">i am AlertWrapper</h3>
      <button className="button" onClick={toggle}>
        Alert
      </button>
    </div>
  );
}
