import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { AlertContext } from '../Alert/AlertContext';

const SHOW_ALERT = 'show';
const HIDE_ALERT = 'hide';

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, visible: true, text: action.text };
    case HIDE_ALERT:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export function AlertReducerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { visible: false, text: '' });

  const show = (text) => dispatch({ type: SHOW_ALERT, text });
  const hide = () => dispatch({ type: HIDE_ALERT });

  return (
    <AlertContext.Provider
      value={{ visible: state.visible, show, hide, text: state.text }}
    >
      {children}
    </AlertContext.Provider>
  );
}

AlertReducerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
