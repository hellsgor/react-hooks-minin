import { useAlert } from './Alert/AlertContext';

export default function AlertWrapper() {
  const { toggle } = useAlert();

  return (
    <div className="card">
      <h3 className="card__title">i am AlertWrapper</h3>
      <button className="button" onClick={toggle}>
        Alert
      </button>
    </div>
  );
}
