import { useAlert } from './Alert/AlertContext';

export default function AlertWithReducer() {
  const { visible, show, hide } = useAlert();

  const alertText = 'Hello from AlertWithReducer!';

  return (
    <div className="card">
      <h3 className="card__title">i am AlertWithReducer</h3>
      <button
        className="button"
        onClick={visible ? hide : () => show(alertText)}
      >
        Alert
      </button>
    </div>
  );
}
