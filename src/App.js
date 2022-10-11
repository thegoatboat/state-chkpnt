
import React, { Component } from 'react';

import './App.css';
import Profile from './Profile';

export class App extends Component {
  constructor(){
    super();
    this.state={
      show:false
    }
  }
togel=()=>{
  this.setState({show: !this.state.show})
}

  render() {
    return (
      <div className='App'>
      <h1> Your mission today</h1>
    <button   onClick={()=>this.togel()} >show</button>
    {this.state.show   &&     <Profile/>}
      </div>
    )
  }
}

export default App