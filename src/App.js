import React from 'react';
import './App.css';
import pic from './assets/bandPic.jpg'

class App extends React.Component{
  state = {
    page:"Home"
  }

  render(){return(
  <div className="Pages">
    <Navbar/>
    <Homepage/>
    <Memberspage/>
    <MemberRow photo="pic" text="This is one"/>
    <Footer/>
    </div>
    )
  }
}

const Navbar = () =>{
  return (
    <nav>
      <h1>Home</h1>
      <h1>Members</h1>
      <h1>Songs</h1>
      <h1>Dates</h1>
    </nav>
  )
}

const Homepage = () =>{
  return(
  <div className="page">
  <img className="background-img" src={pic} alt=""></img>
  </div>
  )
}

const Memberspage = () =>{
  return (
    <div className="page">
    <h2>Meet The Band</h2>
    <p>What's Next is an amazing band playing in the North West with an excellent group of musicians able to play great music and entertain crowds of people</p>
    </div>
  )
}

const MemberRow = (props) =>{
  return (
    <div>
      <img className="memberPhoto" src={props.photo} alt=""></img>
      <p>{props.text}</p>
    </div>
  )
}

const Footer = () =>{
  return (
    <footer>
    <h1>Email: email@example.com</h1>
    </footer>
  )
}



export default App;
