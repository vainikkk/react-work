import React from 'react'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
  let { topicId }= useParams();
  return (
    <div className="homepage">
      {console.log(topicId)}
      This is Dashboard
    </div>
  )
}

export default Dashboard;