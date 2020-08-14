import React, { useEffect, useState } from 'react'
import { Form, Field, ErrorMessage } from 'formik'
import Axios from 'axios'
import { Link } from 'react-router-dom'

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
        error = "Required"
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
        error = "Invalid email"
      }
    }
    return error;
  }

  return (
    <div className="App-Container">
      {/* {console.log(errors)} */}
      <Form className="container">
        <div className="signup ">
          <div className="text-center h1 my-3">SIGN UP</div>
          <hr style={{borderWidth: "10px", width:"30%"}} />
          <div className="link">
            <Link to='/'>Already have an account?</Link>
          </div>
          <div className="mb-3">
            <label>Name<span style={{color:'red', marginLeft:"2px"}}>*</span></label>
            <Field name="name" type="text" className="rounded-pill form-control" placeholder="Enter your full name" />
            <div className="text-danger"><ErrorMessage name="name" /></div>
          </div>
          <div className="mb-3">
            <label>Email Id<span style={{color:'red', marginLeft:"2px"}}>*</span></label>
            <Field name="email" type="email" validate={validateEmail} className="rounded-pill form-control" placeholder="Enter your email id" />
            <div className="text-danger"><ErrorMessage name="email" /></div>
          </div>
          <div className="mb-3">
            <label>Password<span style={{color:'red', marginLeft:"2px"}}>*</span></label>
            <Field name="password" type="password" className="rounded-pill form-control" placeholder="Enter your password" />
            <div className="text-danger"><ErrorMessage name="password" /></div>
          </div>
          <div className="mb-3">
            <label>Re-Enter password<span style={{color:'red', marginLeft:"2px"}}>*</span></label>
            <Field name="confirm_password" type="password" className="rounded-pill form-control" placeholder="Confirm your password" />
            <div className="text-danger"><ErrorMessage name="confirm_password" /></div>
          </div>
          <div className="text-center">
            <button type="submit" disabled={isSubmitting} className="rounded-pill submitbtn btn btn-primary">Sign up</button>
          </div>
        </div>
      </Form>
    </div>
  )
}
export default Signup;