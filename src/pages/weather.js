import React, { useState, useEffect  } from 'react';
import { Stomp } from '@stomp/stompjs';
// https://weatherflow.github.io/SmartWeather/api/ws.html
// https://stomp-js.github.io/stomp-websocket/codo/extra/docs-src/Usage.md.html
// http://jmesnil.net/stomp-websocket/doc/
const CONNECTION_STATUS_CONNECTING = 0;
const CONNECTION_STATUS_OPEN = 1;
const CONNECTION_STATUS_CLOSING = 2;
const CONNECTION_STATUS_CLOSED = 3;

export const Weather = () => {
  // const [ client, setClient ] = useState({});
   useEffect(async () => {
    const url = "ws://ws.weatherflow.com/swd/data?api_key=20c70eae-e62f-4d3b-b3a4-8586e90f3ac8";
    const client = await Stomp.client(url,  ['v10.stomp', 'v11.stomp', 'v12.stomp'] );
    console.log(client.connected, '_');
    const message =
      {
        "type":"listen_start",
        "device_id":1110,
        "id":"random-id-12345",
      };
    const header = {
      login: 'sample',
      passcode: 'sample',
      host: 'ws.weatherflow.com',
    };
    // await client.connect(header,
    //   () => {
    //     console.log('connected')
    //   },
    //   {},
    //   {},
    // );
     client.connect({}, {}, () => {console.log('connected')}, {}, {});

     await client.send(url, {}, JSON.stringify(message));
    //
    await client.subscribe(url, function(msg) {
      console.log(msg, 'here')
      // let message = JSON.parse(msg.body);
      // console.log(message.type + " is at " + message.id);
    });

  });
  return(
    <h1>Sunny:)</h1>
  )
}

export default Weather;
