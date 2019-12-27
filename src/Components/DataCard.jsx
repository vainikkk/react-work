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
        <div className="cardView text-primary">
          <div style={{float: "left"}}>{data.id} Click button for open title and body</div>
          <div>
            <button className="handlebtn btn btn-primary" onClick={handleBody}> body</button>
            <button className="handlebtn btn btn-primary" onClick={handleTitle}> title</button>
            <div  className="clear font-weight-bold mb-2 p-2 text-danger"><div style={toggleTitle ? block : hidden} >{data.title}</div></div>
            <div className="clear p-2 text-info"><div style={toggleBody ? block : hidden} >{data.body}</div></div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

