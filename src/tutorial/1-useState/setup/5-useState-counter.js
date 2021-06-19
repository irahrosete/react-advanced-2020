import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  const complexCounter = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue((prevCount) => {
        return prevCount + 1
      })
    }, 2000)
  }

  return <>
    <section style={{margin: '4rem 0'}}>
      <h3>Normal Counter</h3>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value - 1)}>-</button>
      <button className="btn" onClick={reset}>reset</button>
      <button className="btn" onClick={() => setValue(value + 1)}>+</button>
    </section>
    <section style={{margin: '4rem 0'}}>
      <h3>Complex Counter</h3>
      <h1>{value}</h1>
      <button className="btn" onClick={complexCounter}>increase</button>
    </section>
  </>
};

export default UseStateCounter;