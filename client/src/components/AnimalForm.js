import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const AnimalForm = ({ touched, errors, status }) => {
  const [animal, setAnimal] = useState({})
  useEffect(() => {
    status && setAnimal(status)
  }, [status])

  return (
    <div className='animal-form'>
      <Form>
        <label>
          Species:
          <Field type='text' name='species' placeholder='species' />
          {touched.species && errors.species && (
            <p className='errors'>{errors.species}</p>
          )}
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
        <label>
          Notes:
          <Field
            as='textarea'
            type='text'
            name='notes'
            placeholder='notes...'
          />
        </label>
        <button type='submit'>Submit</button>
      </Form>
      {animal.species && <p>Form submission successful!</p>}
    </div>
  )
}

export default withFormik({
  // form state defined here
  // may or may not receive props
  mapPropsToValues: props => ({
    species: props.species || '',
    size: '',
    diet: '',
    vaccinations: false,
    notes: '',
  }),
  // validation requirements
  validationSchema: yup.object().shape({
    species: yup
      .string()
      .required('This is the species field and it is required'),
  }),
  // form submission
  handleSubmit: (values, { resetForm, setStatus }) => {
    console.log('Submitting')
    axios
      .post('https://reqres.in/api/users/', values)
      .then(response => {
        console.log('response: ', response)
        setStatus(response.data)
        setTimeout(setStatus(null), 3000)
        resetForm()
      })
      .catch(err => {
        console.log(err.response)
      })
  },
})(AnimalForm)
