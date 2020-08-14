import React, { Component } from 'react';
import Multiselect  from "react-bootstrap-multiselect"
import SubNavigationPart from './SubNavigationPart';
 
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {list: [{value:'One',selected:true},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}]};
  }
  render() {
    return (
      <div  className="App-Container">
        Hello
        <Multiselect data={this.state.list} multiple />
        <SubNavigationPart name="Home" />
        <SubNavigationPart name="Checkins" subPart={["checkin","my history" ]} />
        <SubNavigationPart name="Objectives" subPart={["my objective","all objectives"]} />
      </div>
    );
  }
}