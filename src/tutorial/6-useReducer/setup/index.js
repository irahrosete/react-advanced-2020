import React, { useState, useEffect, useRef, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
import { reducer } from './reducer'
// reducer function

const initialState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)
  const { people, isModalOpen, modalContent } = state

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = { id: new Date().getTime().toString(), name }
    if (name) {
      dispatch({ type: 'ADD_ITEM', data: newPerson })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  const nameContainer = useRef(null)

  useEffect(() => {
    nameContainer.current.focus()
  })

  return (
    <>
      {isModalOpen && (
        <Modal modalContent={modalContent} closeModal={closeModal} />
      )}
      <h2>Grocery List</h2>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              ref={nameContainer}
              value={name}
              onChange={handleChange}
            />
          </div>
          <button>add</button>
        </form>
      </div>
      {people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', data: person.id })}
            >
              remove
            </button>
          </div>
        )
      })}
      <button className='clear' onClick={() => dispatch({ type: 'CLEAR_ALL' })}>
        Clear all
      </button>
    </>
  )
}

export default Index
