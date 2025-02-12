import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const ItemsList = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('ItemsList render');
    const newItems = getItems();
    setItems(newItems);
  }, [getItems]);

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};

ItemsList.propTypes = {
  getItems: PropTypes.func,
};
