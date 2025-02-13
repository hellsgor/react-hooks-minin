import PropTypes from 'prop-types';
import { useState } from 'react';
import { AlertContext } from './AlertContext';

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState('');

  const toggle = () => setAlert((prev) => !prev);
  const setAlertMessage = (text) => setMessage(text);

  return (
    <AlertContext.Provider
      value={{ visible: alert, toggle, setAlertMessage, message }}
    >
      {children}
    </AlertContext.Provider>
  );
}

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
