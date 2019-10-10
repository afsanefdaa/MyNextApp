import App, { Container } from 'next/app';
import React from 'react';
import { ClientContext } from 'graphql-hooks';
import withGraphQLClient from '../lib/with-graphql-client';

const Noop = ({ children }) => children;

class MyApp extends App {
  render() {
    const { Component, pageProps, graphQLClient } = this.props;
    const Layout = Component.Layout || Noop;

    return (
      <ClientContext.Provider value={graphQLClient}>
        <Container>
          <Layout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ClientContext.Provider>
    );
  }
}

export default withGraphQLClient(MyApp);
