import { useAlert } from './AlertContext';

export default function Alert() {
  const { visible, toggle } = useAlert();

  if (!visible) return null;

  return (
    <div
      onClick={toggle}
      className="alert"
      style={{
        backgroundColor: 'darkred',
        color: 'white',
        padding: '1rem',
        borderRadius: '0.5rem',
        cursor: 'pointer',
      }}
    >
      <p>This is a very, very important message</p>
    </div>
  );
}
