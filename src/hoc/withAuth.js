import React from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

/* eslint-disable */

const login = ({ token }) => {
  cookie.set('token', token, { expires: 1 });
  Router.push('/profile');
};

const logout = () => {
  cookie.remove('token');
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now());
  Router.push('/login');
};

// Gets the display name of a JSX component for dev tools
const getDisplayName = (Component) => Component.displayName || Component.name || 'Component';

const auth = (ctx) => {
  const { token } = nextCookie(ctx);

  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
  }

  // We already checked for server. This should only happen on client.
  if (!token) {
    Router.push('/login');
  }

  return token;
};

function withAuthSync(WrappedComponent) {
  return class extends React.Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`

    static async getInitialProps(ctx) {
      const token = auth(ctx);

      const componentProps = WrappedComponent.getInitialProps
        && (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    constructor(props) {
      super(props);

      this.syncLogout = this.syncLogout.bind(this);
    }

    componentDidMount() {
      window.addEventListener('storage', this.syncLogout);
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.syncLogout);
      window.localStorage.removeItem('logout');
    }

    syncLogout(event) {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        Router.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export {
  login, logout, withAuthSync, auth,
};
