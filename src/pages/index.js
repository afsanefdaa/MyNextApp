import React from 'react';
import { Link, Layout } from '../components';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { greeting: true };
  }

  componentDidMount() {
    console.log(2);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextState.greeting !== this.state.greeting) {
      console.log('updated');
      return true;
    }
    console.log('the same');
    return false;
  }

  render() {
    console.log(1);
    const { greeting } = this.state;
    return (
      <>
        <span onClick={() => this.setState({ greeting: !greeting })}>{this.state.greeting ? 'welcome' : 'halo'}</span>
        <Link href="/login">Login</Link>
      </>
    );
  }
}

Index.Layout = Layout;

export default Index;
