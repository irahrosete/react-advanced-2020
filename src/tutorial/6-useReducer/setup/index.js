import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function

const Index = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const [modal, setModal] = useState(false)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      setModal(true)
      setPeople([...people, { id: new Date().getTime().toString(), name }])
      setName('')
    } else {
      setModal(true)
    }
  }

  return (
    <>
      {modal && <Modal />}
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input type='text' value={name} onChange={handleChange} />
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
