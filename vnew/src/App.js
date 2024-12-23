import React, { Component } from 'react'

export default class App extends Component {

      constructor(){

          super()

          this.state={

              frontend:"reactjs"
             
          }

      }
       mydata= ()=>{

          this.setState({frontend:"node js"})

         }

  // state - object - this -child super - parent  constructor setstate 
  render() {
    return (
      <div>
         <p>{this.state.frontend} </p>
         <button onClick={this.mydata}>okk</button>
      </div>
    )
  }
}