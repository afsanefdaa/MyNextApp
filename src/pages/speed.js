import React, {Component} from "react";
import socketIOClient from "socket.io-client";
import ReactSpeedometer from "react-d3-speedometer"

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: 0,
      endpoint: "http://127.0.0.1:3000"
    };
  }

  componentDidMount() {
    const {endpoint} = this.state;
    //Very simply connect to the socket
    const socket = socketIOClient(endpoint);
    //Listen for data on the "outgoing data" namespace and supply a callback for what to do when we get one. In this case, we set a state variable
    socket.on("outgoing data", data => this.setState({response: data.num}));
  }

  render() {
    const {response} = this.state;
    return (
      <div style={{textAlign: "center"}}>
        <ReactSpeedometer
          maxValue={140}
          value={response}
          needleColor="black"
          startColor="orange"
          segments={10}
          endColor="red"
          needleTransition={"easeElastic"}
          ringWidth={30}
          textColor={"red"}
        />
      </div>
    )
  }
}

export default App;
