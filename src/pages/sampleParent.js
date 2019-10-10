import React, { Component } from 'react';
import { Layout } from '../components';

class SampleParent extends Component {
  render() {
    return (
      <div>
        hi
      </div>
    );
  }
}
SampleParent.Layout = Layout;
export default SampleParent;
