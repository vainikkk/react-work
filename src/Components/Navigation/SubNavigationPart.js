import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
 
export default class SubNavigationPart extends Component {
  state = {
    height: 0,
  };
 
  toggle = () => {
    if(!this.props.subPart){
      console.log("direct click")
    }
    else{
      const { height } = this.state;
 
      this.setState({
        height: height === 0 ? 'auto' : 0,
      });
    }
  };
  
 
  render() {
    const { height } = this.state;
    return (
      <div>
         <button onClick={ this.toggle }>
          { height === 0 ? this.props.name : 'Close' }
        </button>
 
        <AnimateHeight
          duration={ 500 }
          height={ height } // see props documentation below
        >
          {/* <h1>Your content goes here</h1> */}
         {this.props.subPart && this.props.subPart.map(value => <p>{value}</p> )}
        </AnimateHeight>
      </div>
    );
  }
}