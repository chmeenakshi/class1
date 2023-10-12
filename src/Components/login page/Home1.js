import { Component } from "react";
import Login from "./Login1";
import Logout from "./Logout1";
import Message from "./Message";

class Home extends Component {
  state = { isLoggedin: false };

  onClickBtn = () => {
    this.setState((preveSate) => ({ isLoggedin: !preveSate.isLoggedin }));
  };
  render() {
    const { isLoggedin } = this.state;
    return (
      <div className="home-container">
      <div className="mainHomePage">
        <Message isLoggedin={isLoggedin} />
        {isLoggedin ? (
          <Logout logout={this.onClickBtn} />
        ) : (
          <Login login={this.onClickBtn} />
        )}
      </div>
      </div>
    );
  }
}
export default Home;
