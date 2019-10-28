import React from 'react';
import './App.css';
import pic from './assets/bandPic.jpg'

class App extends React.Component{
  state = {
    page:"Home"
  }
  render(){
    return(
      <div id="page">
        <nav>
          <div id="logo-box">
          <h1 id="logo">What's Next</h1>
          </div>
          <div id="links-box">
            <h1 className="navLinks">Home</h1>
            <h1 className="navLinks">Members</h1>
            <h1 className="navLinks">Dates</h1>
            <h1 className="navLinks">Reviews</h1>
          </div>
        </nav>

      <img className="background-img" src={pic}></img>

      <footer>
        <h1>Email: email@example.com</h1>
      </footer>
      </div>
    )
  }
}

export default App;
