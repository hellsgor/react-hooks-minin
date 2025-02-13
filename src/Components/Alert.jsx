import { useContext } from 'react';
import { AlertContext } from '../App';

export default function Alert() {
  const alert = useContext(AlertContext);

  if (!alert) return null;

  return (
    <div
      className="alert"
      style={{
        backgroundColor: 'darkred',
        color: 'white',
        padding: '1rem',
        borderRadius: '0.5rem',
      }}
    >
      <p>This is a very, very important message</p>
    </div>
  );
}
