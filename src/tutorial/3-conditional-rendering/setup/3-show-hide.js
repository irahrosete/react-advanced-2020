import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Window />}
    </>
  )
}

const Window = () => {
  const [size, setSize] = useState(window.innerWidth)

  const changeSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', changeSize)
    return () => {
      window.removeEventListener('resize', changeSize)
    }
  }, [])

  return (
    <>
      <h2>Window size</h2>
      <h3>{size} px</h3>
    </>
  )
}

export default ShowHide
