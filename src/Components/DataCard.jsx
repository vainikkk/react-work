import React, { useState } from 'react';

export const DataCard = ({props, data}) => {
  const handleBody = () => setToggleBody(!toggleBody) 
  const handleTitle = () => setToggleTitle(!toggleTitle)

  const [toggleBody, setToggleBody] = useState(false)
  const [toggleTitle, setToggleTitle] = useState(false)
  const block = {
    display: "block",
  }
  const hidden = {
    display: "none"
  }
  return (
    <div>
      <React.Fragment>
        <div>
          
        </div>
        
        <div className="cardView">
          <div style={{float: "left"}}>{data.id}</div>
          <div>
            <button className="handlebtn btn btn-primary" onClick={handleBody}> body</button>
            <button className="handlebtn btn btn-primary" onClick={handleTitle}> title</button>
            <div className="clear"><div style={toggleBody ? block : hidden} >{data.body}</div></div>
            <div  className="clear"><div style={toggleTitle ? block : hidden} >{data.title}</div></div>
          </div>
         
        </div>
      </React.Fragment>
    </div>
  );
}

