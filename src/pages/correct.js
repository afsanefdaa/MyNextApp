import React, { useState, useEffect  } from 'react';
import { Stomp } from '@stomp/stompjs';
// https://weatherflow.github.io/SmartWeather/api/ws.html
// https://stomp-js.github.io/stomp-websocket/codo/extra/docs-src/Usage.md.html
// http://jmesnil.net/stomp-websocket/doc/
// const CONNECTION_STATUS_CONNECTING = 0;
// const CONNECTION_STATUS_OPEN = 1;
// const CONNECTION_STATUS_CLOSING = 2;
// const CONNECTION_STATUS_CLOSED = 3;

export const Weather = () => {
  // const [ client, setClient ] = useState({});
  useEffect( () => {
    const url = "ws://sit.kiandigital.com:8082/market/live";
    const client = Stomp.client(url);
    console.log(client.connected, '_');
    const aaa = { "type":"listen_start", "device_id":1110, "id":"random-id-9305721718" }

    // const header = {
    //   login: 'sample',
    //   passcode: 'sample',
    //   host: 'ws.weatherflow.com',
    // };
    // await client.connect(header,
    //   () => {
    //     console.log('connected')
    //   },
    //   {},
    //   {},
    // );
    client.connect({}, {}, () => {
      console.log(client)
      client.subscribe("/live/instrument/bid-ask/IRO1BMLT0001", message => {console.log(message)})
    });

    // await client.send(url, {}, JSON.stringify(message));
    //
    // await client.subscribe(url, function(msg) {
    //   console.log(msg, 'here')
    //   // let message = JSON.parse(msg.body);
    //   // console.log(message.type + " is at " + message.id);
    // });

  });
  return(
    <h1>Sunny:)</h1>
  )
};

export default Weather;
