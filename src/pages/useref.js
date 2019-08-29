import React, {useRef} from 'react';

const UseRef = () => {
  const inputEl = useRef(null);
  const onButtonClick = (e) => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    console.log(inputEl.current.value, 'current value')
  };
  return (
    <>
      <input ref={e => inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default UseRef;
