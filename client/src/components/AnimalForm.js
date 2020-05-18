import React, { useState } from 'react'
import { withFormik } from 'formik'

const AnimalForm = props => {
  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <div className='animal-form'>
      <form onSubmit={handleSubmit}>
        <label>
          Species:
          <input
            type='text'
            name='species'
            value={props.values.species}
            onChange={props.handleChange}
          />
        </label>
        <label>
          Size:
          <input
            type='text'
            name='size'
            value={props.values.size}
            onChange={props.handleChange}
          />
        </label>
        <button type='button'>Anything!</button>
      </form>
    </div>
  )
}

export default withFormik({
  mapPropsToValues: props => ({
    species: props.species || '',
    size: '',
  }),
})(AnimalForm)
