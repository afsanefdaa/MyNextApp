import React, { useState, useEffect, useCallback } from 'react';
import useWebSocket from 'react-use-websocket';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Card, Button, Badge } from 'antd';
import { Layout } from '../components';
import { withAuthSync } from '../hoc/withAuth';


const CONNECTING = 0;
const OPEN = 1;
const CLOSING = 2;
const CLOSED = 3;

export const Weather = () => {
  const url = 'ws://ws.weatherflow.com/swd/data?api_key=20c70eae-e62f-4d3b-b3a4-8586e90f3ac8';
  const startMsg = '{ "type":"listen_start", "device_id":1110, "id":"2098388936" }';
  const stopMsg = '{ "type":"listen_stop", "device_id":1110, "id":"2098388936" }';
  const [messageList, setMessageList] = useState([]);
  const [sendMessage, lastMessage, readyState] = useWebSocket(url);

  const startHandler = useCallback(() => sendMessage(startMsg), []);
  const stopHandler = useCallback(() => sendMessage(stopMsg), []);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageList((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage]);

  const connectionStatus = {
    [CONNECTING]: 'Connecting',
    [OPEN]: 'Open',
    [CLOSING]: 'Closing',
    [CLOSED]: 'Closed',
  }[readyState];

  let realData;
  if (lastMessage) {
    realData = JSON.parse(lastMessage.data);
  }
  const colors = {
    [CONNECTING]: 'blue',
    [OPEN]: 'green',
    [CLOSING]: 'purple',
    [CLOSED]: 'magenta',
  }[readyState];

  const stompCode = `
      import React, { useState, useEffect  } from 'react';
      import { Stomp } from '@stomp/stompjs';
  
      export const Weather = () => {
        useEffect( () => {
          const url = 'ws://ws.weatherflow.com/swd/data?api_key=20c70eae-e62f-4d3b-b3a4-8586e90f3ac8';
          const msg = '{ "type":"listen_stop", "device_id":1110, "id":"2098388936" }';
          const client = Stomp.client(url);
  
          client.connect({}, {}, () => {
            client.subscribe(url, message => {console.log(message)})
          });
  
        });
        return(
          <h1>Hello</h1>
        )
      };
      export default Weather;
    `;

  return (
    <div>
      <a rel="noopener noreferrer" href="https://weatherflow.github.io/SmartWeather/api/ws.html" target="_blank">Find WeatherFlow API Here</a>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={(
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button type="primary" onClick={startHandler} disabled={readyState !== OPEN}>Send Start Listening Message</Button>
            <Badge count={`Status: ${connectionStatus}`} style={{ backgroundColor: colors }} />
            <Button type="danger" onClick={stopHandler} disabled={readyState === OPEN}>Send Stop Listening Message</Button>
          </div>
        )}
      >
        {
          messageList.length !== 1 && (
            <ul>
              {messageList.map((message, idx) => <li key={realData.type}>{realData.type === 'obs_air' ? realData.summary.pressure_trend : null}</li>)}
            </ul>
          )
        }
      </Card>
      <h1 style={{ marginTop: '40px' }}>
          This is the same api with stompjs!
      </h1>
      <SyntaxHighlighter language="javascript">
        {stompCode}
      </SyntaxHighlighter>
    </div>
  );
};

Weather.Layout = Layout;
export default withAuthSync(Weather);
