import React, { Component } from 'react';
import { Layout } from '../../components';
import { withAuthSync } from '../../hoc/withAuth';

class Animations extends Component {
  render() {
    return (
      <h1>Animations</h1>
    );
  }
}
Animations.Layout = Layout;
export default withAuthSync(Animations);
