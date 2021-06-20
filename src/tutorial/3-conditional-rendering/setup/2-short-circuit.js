import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [isError, setIsError] = useState("")
  return <>
    <h2>short circuit</h2>
    <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
    {isError && <h2>Error...</h2>}
    {isError ? <h4>There is an error</h4> : <h4>There is no error</h4>}
  </>
}

export default ShortCircuit;
