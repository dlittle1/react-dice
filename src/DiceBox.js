import React from 'react'
import Die from "./Die"

class DiceBox extends React.Component {
   constructor(){
      super()
      this.state = {
         dice: [0, 0, 0, 0, 0]
      }

      this.rollDice = this.rollDice.bind(this)
   }

   rollDice(){
      let newDice = this.state.dice.map(die => Math.ceil(Math.random() * 6))
      this.setState(prevState => {
         return {
            dice: newDice
         }
      })
   }

   render() {
      let newDice = this.state.dice.map((die, i, arr) => {
         return <Die key={i} numRolled={arr[i]}/>
      })
      return (
         <div>
            {newDice}
            <button onClick={this.rollDice}>Roll The Dice</button>
         </div>
      )
   }
}

export default DiceBox
