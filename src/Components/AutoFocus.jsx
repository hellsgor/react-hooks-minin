import { useRef } from 'react';

export default function AutoFocus() {
  const inputRef = useRef(null);

  // с помощью атрибута ref, в даном случае, у элемента input
  // можно ссылаться на этот элемент

  function focus() {
    inputRef.current.focus();
    // в данном случае в значении свойства current передан DOM-элемент
    // за счёт прикреплённой к элементу "ссылки"
  }

  return (
    <div className="counter card">
      <h3 className="counter__title">i am AutoFocus</h3>
      <div className="counter__wrapper card__wrapper">
        <input type="text" ref={inputRef} />
        <button className="button" onClick={focus}>
          focus
        </button>
      </div>
    </div>
  );
}
