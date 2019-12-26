import React, { useEffect, useState } from 'react'
import { Form, Field, ErrorMessage } from 'formik'
import Axios from 'axios'

const Signup = ({ isSubmitting }) => {

  const [ data, setData ] = useState("");
  useEffect(() => {
    Axios.get("http://5dfb61d30301690014b8fa75.mockapi.io/sigup").then(response=> {
      setData(response)
    })
  },[])

  const validateEmail = (value) => {
    let error;
    if(data){
        data.data.map(email => {
        if(email.email===value){
          error = "Email id is already register"
        }
        return null
      })
      if(!value){
        error = "Email id is required"
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
        error = "Enter valid email id"
      }
    }
    return error;
  }

  return (
    <div className="App-Container">
      {/* {console.log(errors)} */}
      <Form className="container">
        <div className="signup ">
          <div className="text-center h1 my-3">Sign Up</div>
          <div className="mb-3">
            <label>Name:</label>
            <Field name="name" type="text" className="form-control" placeholder="Enter your full name" />
            <div className="text-danger"><ErrorMessage name="name" /></div>
          </div>
          <div className="mb-3">
            <label>Email Id:</label>
            <Field name="email" type="email" validate={validateEmail} className="form-control" placeholder="Enter your email id" />
            <div className="text-danger"><ErrorMessage name="email" /></div>
          </div>
          <div className="mb-3">
            <label>Password:</label>
            <Field name="password" type="password" className="form-control" placeholder="Enter your password" />
            <div className="text-danger"><ErrorMessage name="password" /></div>
          </div>
          <div className="mb-3">
            <label>Confirm your password:</label>
            <Field name="confirm_password" type="password" className="form-control" placeholder="confirm your password" />
            <div className="text-danger"><ErrorMessage name="confirm_password" /></div>
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