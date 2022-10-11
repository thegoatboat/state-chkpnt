import React, { Component } from 'react'
import "./App.css";

 class Profile extends Component {

  constructor(){
    console.log('this is a constructor')
    super();
    this.state={
        
        time:0,
        intervall:null,
        
    }
}

//life cycle 
componentDidMount(){
    console.log('this is for the first render');
    this.setState({
       intervall:setInterval(
        ()=> this.setState({time : this.state.time +1}),1000)
    })
    
}


componentDidUpdate(){
    console.log('u did an upodate ');
    console.log(this.state.counter)

}


  render() {
    console.log('this the render part ')
    return (
      <div>
      <h1>RUN NOW !</h1>

      <img  className="photo"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpost.healthline.com%2Fwp-content%2Fuploads%2F2020%2F09%2FMale_Female_Sprinting_1200x628-facebook-1200x628.jpg&f=1&nofb=1&ipt=f70d938ca6370146ee0351247c0043d16af18a39e95196a111a95955ffd3d625&ipo=images"
      alt="img"/>
      

      <h1>---{this.state.time}--- </h1>
      </div>
    )
  }
}

export default Profile
