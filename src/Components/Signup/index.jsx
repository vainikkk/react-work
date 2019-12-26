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
    name: Yup.string().required("Name is required "),
  }),

  handleSubmit(values,  { setSubmitting }){
    const { name, email, password } = values
    console.log( name)
    Axios.post("http://5dfb61d30301690014b8fa75.mockapi.io/sigup",{
      name,
      email,
      password
  }).then((response)=> {console.log(response)}).catch()
    // console.log(props)
  }
})(Signup);