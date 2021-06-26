import React, { useState, useEffect, useRef, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newPeople = [...state.people, action.data]
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item added',
      }
    }
    case 'NO_VALUE': {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'please enter a value',
      }
    }
    default:
      return state
  }
}

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

  const nameContainer = useRef(null)

  useEffect(() => {
    nameContainer.current.focus()
  })

  return (
    <>
      {isModalOpen && <Modal modalContent={modalContent} />}
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
      {people.map((person) => {
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
