import { Component } from "react"
import './Clickcount.css'

class Clickcount extends Component {
    state = {count:0}
   increase = () => {
    this.setState(prevState => ({count : prevState.count + 1}))
   }
    render(){
        const {count} = this.state

        return(
            <div className="counter-bg-con">
           <div>
           <h1 className="counter-heading"> This Button has clicked <br/><span className="counter">{count}</span>times</h1>
           <p>click the button to increass the count!</p>
           <button type="button" className="counter-btn" onClick={this.increase}>click me!</button>
           </div>
           </div>
        )
    }
}

export default Clickcount;