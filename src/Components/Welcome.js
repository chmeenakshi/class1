import { Component } from "react";
import './Clickcount.css'
class Welcome extends Component {
    state = {isSubscribed: true}

    changeBtn =() =>{
        const {isSubscribed} = this.state

        if (isSubscribed === true){
            this.setState({isSubscribed:false})
        }else{
            this.setState({isSubscribed:true})
        }
    }

    render(){
        const {isSubscribed} = this.state

        return(
            <div className="welcome-bg-btn">
                <div>
                    <h1 className="welcome-heading">Welcome</h1>
                    <p className="welcome-description"> Thank you! Happy Learning</p>
                    {isSubscribed ?(<button type="button" onClick={this.changeBtn}>Subscrib</button>
                    ):( <button type="button" onClick={this.changeBtn}>Subscribed</button>)}

                </div>

            </div>
        )
    }
}
export default Welcome;