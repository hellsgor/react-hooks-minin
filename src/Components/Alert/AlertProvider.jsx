import PropTypes from 'prop-types';
import { useState } from 'react';
import { AlertContext } from './AlertContext';

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState(false);

  const toggle = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider value={{ visible: alert, toggle }}>
      {children}
    </AlertContext.Provider>
  );
}

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
