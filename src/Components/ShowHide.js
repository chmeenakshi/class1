import { Component} from "react";
import './Clickcount.css'

class ShowHide extends Component {
    state ={showFirstName:false,showLastName:false,}

    onShowLastName =() =>{
        this.setState(prevState => ({showLastName:!prevState.showLastName}))
    }
    onShowFirstName =() =>{
        this.setState(prevState => ({showFirstName:!prevState.showFirstName}))
    }
    render(){
        const {showFirstName,showLastName}= this.state

        return(
            <div className="app-container">
                <h1 className="heading">Show/Hide</h1>
                <div className="show-hide-container">
                    <div className="name-container">
                        <button type="button" className="show-hide-button" onClick={this.onShowFirstName}>show/hide firstname</button>
                        {showFirstName && <p className="name">chitikila</p>}
                    </div>
                    <div className="name-container">
                        <button type="button" className="show-hide-button" onClick={this.onShowLastName}>show/hide lastname</button>
                        {showLastName && <p className="name">Meena</p>}
                    </div>
                </div>

            </div>
        )
    }
}

export default ShowHide;