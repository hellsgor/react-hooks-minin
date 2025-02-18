import { useAlert } from '../Alert/AlertContext';

export default function AlertReducer() {
  const { visible, hide, text } = useAlert();

  if (!visible) return null;

  return (
    <div
      onClick={hide}
      className="alert"
      style={{
        backgroundColor: 'darkred',
        color: 'white',
        padding: '1rem',
        borderRadius: '0.5rem',
        cursor: 'pointer',
      }}
    >
      <p>{text || 'This is a very, very important message'}</p>
    </div>
  );
}
