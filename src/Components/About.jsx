import React from 'react'

const About = () => {
  const data = JSON.parse(localStorage.getItem("tokan"))
 

  return (
    <div className="homepage">
      
      <div className="text-danger h1 my-3">Welcome to my website</div>
      {data && <div>
        <div>{`Hello ${data.name}!`}</div>
        <div>{`Your Email id is : ${data.email}`}</div>
      </div>}
    </div>
  )
}

export default About;