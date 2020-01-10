import React from 'react';
import { compose, withProps, withState } from 'proppy';
import { attach } from 'proppy-react';

const MyProppy = compose(
  withProps({ foo: 'foo value' }),
  withState('counter', 'setCounter', 0),
);

function Proppyjs({ foo, counter, setCounter }) {
  return (
    <div>
      <p>
Foo:
        {foo}
      </p>

      <p>
Counter:
        {counter}
      </p>

      <button onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
}

export default attach(MyProppy)(Proppyjs);
