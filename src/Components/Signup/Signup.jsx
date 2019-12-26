import React from 'react'
import { Form, Field, ErrorMessage } from 'formik'
// import { Redirect } from 'react-router-dom'

const Signup = ({values, isSubmitting, handleSubmit}) => {
  // const {} = props
  return (
    <div className="App-Container">
      <Form className="container">
        <div className="signup ">
          <div className="mb-3">
            <label>Enter your Name:</label>
            <Field name="name" type="text" className="form-control" />
            <div className="text-danger"><ErrorMessage name="name" /></div>
          </div>
          <div className="mb-3">
            <label>Enter your Email Id:</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" />
          </div>
          <div className="mb-3">
            <label>Enter your Password:</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage name="password" />
          </div>
          <div className="mb-3">
            <label>Confirm your password:</label>
            <Field name="confirm_password" type="password" className="form-control" />
            <ErrorMessage name="confirm_password" />
          </div>
          <div className="text-center">
            <button type="submit" disabled={isSubmitting} className="submitbtn btn btn-primary">Submit</button>
          </div>
        </div>
      </Form>
    </div>
  )
}
export default Signup;