import React from 'react';
import './App.css';
import pic from './assets/bandPic.jpg'

class App extends React.Component{
  state = {
    page:"Home"
  }

  ChangetoHom = () =>{
    return(this.setState({page:"Home"}))
  }

  ChangetoMem = () =>{
    return (this.setState({page:"Members"}))
  }

  ChangetoSong = () =>{
    return (this.setState({page:"Songs"}))
  }

  ChangetoDates = () =>{
    return (this.setState({page:"Dates"}))
  }

  render(){
    if (this.state.page==="Home"){return(
  <div className="Pages">
  <nav>
      <h1 onClick={this.ChangetoHom}>Home</h1>
      <h1 onClick={this.ChangetoMem}>Members</h1>
      <h1 onClick={this.ChangetoSong}>Songs</h1>
      <h1 onClick={this.ChangetoDates}>Dates</h1>
  </nav>
    <Homepage/>
    <Footer/>
  </div>
    )}

  else if (this.state.page==="Members"){return(
  <div className="Pages">
  <nav>
    <h1 onClick={this.ChangetoHom}>Home</h1>
    <h1 onClick={this.ChangetoMem}>Members</h1>
    <h1 onClick={this.ChangetoSong}>Songs</h1>
    <h1 onClick={this.ChangetoDates}>Dates</h1>
  </nav>
    <Memberspage/>
    <Footer/>
  </div>
    )}

  else if (this.state.page==="Songs"){return(
  <div className="Pages">
  <nav>
    <h1 onClick={this.ChangetoHom}>Home</h1>
    <h1 onClick={this.ChangetoMem}>Members</h1>
    <h1 onClick={this.ChangetoSong}>Songs</h1>
    <h1 onClick={this.ChangetoDates}>Dates</h1>
  </nav>
    <SongPage/>
    <Footer/>
  </div>
        )}

  else if (this.state.page==="Dates"){return(
    <div className="Dates">
    <nav>
      <h1 onClick={this.ChangetoHom}>Home</h1>
      <h1 onClick={this.ChangetoMem}>Members</h1>
      <h1 onClick={this.ChangetoSong}>Songs</h1>
      <h1 onClick={this.ChangetoDates}>Dates</h1>
    </nav>
      <DatePage/>
      <Footer/>
    </div>
            )}
  }
}
// const Navbar = () =>{
//   return (
//     <nav>
//       <h1>Home</h1>
//       <button onClick="ChangetoMem">Members</button>
//       <h1>Songs</h1>
//       <h1>Dates</h1>
//     </nav>
//   )
// }

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

const SongPage = () =>{
  return (
    <div className="page">
      <h2>This is the songs page</h2>
    </div>
  )
}

const DatePage = () =>{
  return (
    <div className="page">
      <h2>This is the upcoming dates page</h2>
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
