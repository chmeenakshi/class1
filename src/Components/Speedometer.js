import { Component } from "react";
import './Clickcount.css'

class Speedometer extends Component {
    state = {count:0}

    accelerate = ( )=>{
        this.setState(prevState => prevState.count < 200 ?{count: prevState.count +10}:{count:200})
    }
    break = ( )=>{
        this.setState(prevState => prevState.count > 0?{count: prevState.count -10}:{count:0})
    }

    render(){
        const {count} = this.state

    return(
        <div className="speedometer-bg-con">
            <div>
              <h1 className="speedometer-heading">SPEEDOMETER</h1>  
              <img className=" speedometer-img" src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer"/>
              <h2 className="speedometer-speed"> speed is <span>{count}mph</span></h2>
              <p className="speedometer-marning"> Min Limit is 0mpg ,Max Limit is 200mph</p>
            <div>
            <button type="button" className="btn-accelerate"onClick={this.accelerate}>Accelerate</button>
            <button type="button" className="btn-break"onClick={this.break}>Apply break</button>
            </div>
            </div>
        </div>
    )
    }
}
export default Speedometer;