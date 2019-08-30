import React, { Component } from 'react'
import Blog from './Container/Blog'

class App extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>BLOG POST</h1>
          <hr/>
          <Blog/>
        </center>
      </div>
    )
  }
}

export default App
