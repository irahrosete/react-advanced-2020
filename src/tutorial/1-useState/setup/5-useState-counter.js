import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  return <>
    <h3>Counter</h3>
    <h1>{value}</h1>
    <button className="btn" onClick={() => setValue(value - 1)}>-</button>
    <button className="btn" onClick={reset}>reset</button>
    <button className="btn" onClick={() => setValue(value + 1)}>+</button>
  </>
};

export default UseStateCounter;