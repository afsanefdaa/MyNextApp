import React, { Component } from 'react';
import Stomp from '@stomp/stompjs';

var url = "wss://ws.weatherflow.com/swd/data";

class WebSocketPage extends Component {

    state = {
        client: Stomp.client('wss://echo.websocket.org')
    }
    // useEffect(() => {
    //     const client = Stomp.client(url);
    //     console.lo(client, '<<<');
    //     client.connect({}, {}, () => {
    //         console.log('----')
    //     });
    //     client.subscribe("wss://ws.weatherflow.com/swd/data?api_key=20c70eae-e62f-4d3b-b3a4-8586e90f3ac8", () => {
    //         console.log('*****')
    //     });
    // });
    componentDidMount() {
        this.state.client.connect({},{}, ()=>{
            this.someThing(
                this.state.client
            )

        })
    }

    someThing = (client) => {
        client.subscribe('I am chatting with you', message => {
            console.log(message, '**')
        })

    }

    render() {
        return (
            <div>
                <p>WebSocket</p>
            </div>
        );
    }
}

export default WebSocketPage;
