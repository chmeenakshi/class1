import { Component } from "react";

import './Clickcount.css'

class EvenOdd extends Component {
    state = {count:0}
    getRandomNumber = () => Math.ceil(Math.random() * 100)

    onIncrement = () => {
        const RandomNumber = this.getRandomNumber()
        this.setState(prevState =>({count:  RandomNumber}))
    }
    render(){
        const {count} = this.state
        const displayText = count % 2 === 0 ? 'Even' :'Odd'

        return(
            <div className="even-container">
             <div className="count-container"> 
                <h1 className="count"> Count{count}</h1>
                <p className="number-category">Count is {displayText}</p>
                <button type="button" className="increment-button" onClick={this.onIncrement}>Increment</button>
                <p className="note">*Increment By Random Number Between 0 to 100</p>
             </div>
            </div>
        )
    }
}

export default EvenOdd;