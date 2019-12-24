import React from 'react'
import { useRouteMatch } from 'react-router-dom'

const NoMatch = (props) => {
  let match = useRouteMatch();
  return (
    <div>
      {console.log(match)}
      {console.log(props.history)}
      No matching this route : {props.history.location.pathname}
    </div>
  )
}
export default NoMatch;