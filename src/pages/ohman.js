import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

const CONNECTION_STATUS_CONNECTING = 0;
const CONNECTION_STATUS_OPEN = 1;
const CONNECTION_STATUS_CLOSING = 2;
const CONNECTION_STATUS_CLOSED = 3;

const Weather = () => {

  const [socketUrl, setSocketUrl] = useState('wss://ws.weatherflow.com/swd/data?api_key=20c70eae-e62f-4d3b-b3a4-8586e90f3ac8');
  // const [socketUrl, setSocketUrl] = useState('wss://echo.websocket.org'); //Public API that will echo messages sent to it back to the client
  const [messageHistory, setMessageHistory] = useState([]);
  const [sendMessage, lastMessage, readyState] = useWebSocket(socketUrl);
  const handleClickChangeSocketUrl = useCallback(() => setSocketUrl('ws://ws.weatherflow.com/swd/data?api_key=20c70eae-e62f-4d3b-b3a4-8586e90f3ac8'), []);
  const handleClickSendMessage = useCallback(() => sendMessage('{ "type":"listen_start", "device_id":1110, "id":"random-id-9305721718" }'), []);

  useEffect(() => {
    if (lastMessage != null) {
      setMessageHistory(prev => prev.concat(lastMessage));
      console.log(lastMessage.data)
    }
  }, [lastMessage]);

  const connectionStatus = {
    [CONNECTION_STATUS_CONNECTING]: 'Connecting',
    [CONNECTION_STATUS_OPEN]: 'Open',
    [CONNECTION_STATUS_CLOSING]: 'Closing',
    [CONNECTION_STATUS_CLOSED]: 'Closed',
  }[readyState];
  /*
  {
  "summary": {
    "pressure_trend": "falling",
    "strike_count_3h": 0,
    "strike_last_dist": 27,
    "strike_last_epoch": 1560981235
  },
  "serial_number": "AR-00002583",
  "hub_sn": "HB-00001089",
  "type": "obs_air",
  "source": "mqtt",
  "obs": [
    [
      1561059096,
      1012.4,
      32.5,
      99,
      0,
      0,
      2.59,
      1
    ]
  ],
  "device_id": 1110,
  "firmware_revision": 20
}
  createRecord()*/

  console.log(messageHistory)
  return (
    <div>
      <button onClick={handleClickChangeSocketUrl}>Click Me to change Socket Url</button>
      <button onClick={handleClickSendMessage} disabled={readyState !== CONNECTION_STATUS_OPEN}>Click Me to send 'Hello'</button>
      <span>The WebSocket is currently {connectionStatus}</span>
      {/* <span>Last message: {lastMessage.data}</span> */}
      <ul>
        {messageHistory.map((message, i) => {
          const data = JSON.parse(message.data)
          if (data && data.obs)
            return (<div key={i}>
              {/* <div>{data.obs[0][0]}</div> */}

              <div>{(new Date(data.obs[0][0] * 1000)).toISOString()}</div>
            </div>)})}
      </ul>
    </div>
  );
};

export default Weather;
