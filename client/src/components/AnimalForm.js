import React, { useState } from 'react'

const AnimalForm = () => {
  const [animal, setAnimal] = useState({ species: '' })

  const handleChange = event => {
    setAnimal({ ...animal, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('species: ', animal.species)
  }

  return (
    <div className='animal-form'>
      <form onSubmit={handleSubmit}>
        <label>
          Species:
          <input type='text' name='species' onChange={handleChange} />
        </label>
        <button type='button'>Anything!</button>
      </form>
    </div>
  )
}

export default AnimalForm
