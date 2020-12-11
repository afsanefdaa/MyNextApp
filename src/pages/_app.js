import App from 'next/app';
import React from 'react';
import { ClientContext } from 'graphql-hooks';
import { Provider } from 'react-redux';
import withGraphQLClient from '../lib/with-graphql-client';
import withReduxStore from '../hoc/withReduxStore';
import { setProfileData } from '../../store/action';

const Noop = ({ children }) => children;

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      console.log('handle FCP results', metric);
      break;
    case 'LCP':
      console.log('handle LCP results', metric);
      break;
    case 'CLS':
      console.log('handle CLS results', metric);
      break;
    case 'FID':
      console.log('handle FID results', metric);
      break;
    case 'TTFB':
      console.log('handle TTFB results', metric);
      break;
    default:
      break;
  }
}

class MyApp extends App {
  render() {
    const {
      Component, pageProps, graphQLClient, reduxStore,
    } = this.props;
    const Layout = Component.Layout || Noop;

    return (
      <Provider store={reduxStore}>
        <ClientContext.Provider value={graphQLClient}>
          <Layout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Layout>
        </ClientContext.Provider>
      </Provider>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
  if (ctx.req && ctx.req.headers.cookie) {
    ctx.reduxStore.dispatch(setProfileData(ctx.req.headers.cookie.split('=')[1]));
  }
};

export default withReduxStore(withGraphQLClient(MyApp));
