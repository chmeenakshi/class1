import { Component } from "react";

import './Clickcount.css'

class Fruits extends Component {
    state = {
        mangoCount:0,
        bananaCount:0,
    }
    OnClickEatBanana = () => {
        this.setState(prevState =>({bananaCount: prevState.bananaCount + 1}))
    }
    OnClickEatMango = () => {
        this.setState(prevState =>({mangoCount: prevState.mangoCount + 1}))
    }
    render(){
        const {mangoCount,bananaCount }=this.state

     return(
        <div className="fruits-counter-container">
            <div className="fruits-counter">
                <h1 className="count-text"> Bob ate<span className="counts">{mangoCount}</span>mangoes
                <span className="counts">{bananaCount}</span>bananas</h1>
                <div className="counters-control-container">
                    <div className="counter-control" >
                        <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango" className="fruit-image"/>
                        <div className="button-container">
                            <button type="button" className="button" onClick={this.OnClickEatMango}>Eat Mango</button>
                        </div>
                    </div>
                    <div className="counter-control" >
                        <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana" className="fruit-image"/>
                        <div className="button-container">
                            <button type="button" className="button" onClick={this.OnClickEatBanana}>Eat Banana</button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     )
        
    }

}

export default Fruits;
