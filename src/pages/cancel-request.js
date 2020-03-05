import React from 'react';
import axios from 'axios';

const CancelRequest = () => {
  const handleCancel = () => {
    const { CancelToken } = axios;
    const source = CancelToken.source();

    const response = axios.get('https://api.spacexdata.com/v3/launches', {
      cancelToken: source.token,
    });

    // cancel the request by checking the promise
    setTimeout(() => {
      source.cancel('Operation canceled by the user.');
      console.log('hey ha ha canceled', response);
    }, 50);
  };
  return (
    <div>
      <button type="button" onClick={() => handleCancel()}>Cancel token</button>
    </div>
  );
};

CancelRequest.propTypes = {

};

export default CancelRequest;
