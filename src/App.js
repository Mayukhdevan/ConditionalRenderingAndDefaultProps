// CONDITIONAL RENDERING-->
// ____________________________________
// 1) Using if....else

import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
  }

  render() {
    return (
      <div className="container">
        <Welcome greeting="Hi" />
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App

// 2) Using Element Variable

/* 
import { Component } from "react"
import './App.css'

class App extends Component {
  state = { isLoggedIn: true }

  render() {
    const { isLoggedIn } = this.state
    let authButton
    if (isLoggedIn) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Login</button>
    }
    return (
      <div className="container">
        <h1>React JS</h1>
        {authButton}
      </div>
    )
 }
}

export default App
*/

// 3) Using ternary operator

/*
import { Component } from "react"
import './App.css'

class App extends Component {

  render() {
    const { isLoggedIn } = this.state
    return (
      <div className="container">
        {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    )
  }
}

export default App
*/

// 4) Using logical && operator

/* 
import { Component } from "react"
import './App.css'

class App extends Component {

  render() {
    const { isLoggedIn } = this.state
    return (
      <div className="container">
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
*/
