import React, { useState, useEffect, useRef, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function

const reducer = (state, action) => {}
const initialState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
    } else {
    }
  }

  const nameContainer = useRef(null)

  useEffect(() => {
    nameContainer.current.focus()
  })

  return (
    <>
      {state.isModalOpen && <Modal />}
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            ref={nameContainer}
            value={name}
            onChange={handleChange}
          />
          <button>add</button>
        </form>
      </div>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
