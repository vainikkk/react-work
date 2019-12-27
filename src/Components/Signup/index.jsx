import Signup from './Signup'
import {  withFormik } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios';
// import { Redirect } from 'react-router-dom'

export default withFormik({
  mapPropsToValues: () => ({ 
    name: '', 
    email: '',
    password: '',
    confirm_password: ''
  }),
  
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3).required("Required "),
    // email: Yup.string()
    //           .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,"enetr valid email address")
    //           .required("Email id is required"),
    password: Yup.string()
                  .matches(/^[A-Za-z]\w{7,14}$/,"password must be contain 7 to 14 character exclude special charecter")
                  .required("Required"),
    confirm_password: Yup.string()
                          .oneOf([Yup.ref('password'), null],"Password don't match")
                          .required('Required')
  }),

  handleSubmit(values,  { setSubmitting, resetForm }){
    const { name, email, password } = values
    console.log( name)
    Axios.post("http://5dfb61d30301690014b8fa75.mockapi.io/sigup",{
      name,
      email,
      password
  }).then((response)=> {
    alert(`Hello ${response.data.name}! you are successfully register`)
    resetForm();
  }).catch((error)=> {
    console.log(error)
  })
  
  }
})(Signup);