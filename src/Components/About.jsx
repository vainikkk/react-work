import React, { useState } from 'react'
import Multiselect  from "react-bootstrap-multiselect"
import Demo from './Confirmation/Demo'

const About = () => {
  // const data = JSON.parse(localStorage.getItem("tokan"))
  const [list, setList] = useState([{value:'One',selected:true},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}])

  return (
    <div className="homepage">
      
      <div className="text-danger h1 my-3">Welcome to my website</div>
      {/* {data && <div>
        <div>{`Hello ${data.name}!`}</div>
        <div>{`Your Email id is : ${data.email}`}</div> */}
      {/* </div>} */}
      Hello
      <Multiselect data={list} multiple />
      <Demo />
    </div>
  )
}

export default About;