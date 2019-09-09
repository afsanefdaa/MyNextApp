import React, { useEffect, useState } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const CustomHook = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const title = `you clicked ${count} times`;
  useDocumentTitle(title);
  return (
    <>
      <h3>
        {count}
      </h3>
      <button onClick={increment}>
        increment
      </button>
    </>
  );
};

export default CustomHook;
