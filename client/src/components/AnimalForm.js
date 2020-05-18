import React, { useState } from 'react'
import { withFormik, Form, Field } from 'formik'

const AnimalForm = ({ values }) => {
  return (
    <div className='animal-form'>
      <Form>
        <label>
          Species:
          <Field type='text' name='species' placeholder='species' />
        </label>
        <label>
          Size:
          <Field type='text' name='size' placeholder='size' />
        </label>
        <label>
          Diet:
          <Field component='select' name='diet' className='food-select'>
            <option>Choose an Option</option>
            <option value='carnivore'>Carnivore</option>
            <option value='herbivore'>Herbivore</option>
            <option value='omnivore'>Omnivore</option>
          </Field>
        </label>
        <label className='checkbox-container'>
          vaccinations
          <Field type='checkbox' name='vaccinations' />
          <span className='checkmark' />
        </label>
        <button type='button'>Anything!</button>
      </Form>
    </div>
  )
}

export default withFormik({
  // may or may not receive props
  mapPropsToValues: props => ({
    species: props.species || '',
    size: '',
    diet: '',
    vaccinations: false,
  }),
})(AnimalForm)
