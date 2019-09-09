import App, { Container } from 'next/app';
import React from 'react';
import { ClientContext } from 'graphql-hooks';
import Layout from '../components/Layout';
import withGraphQLClient from '../lib/with-graphql-client';

class MyApp extends App {
  render() {
    const { Component, pageProps, graphQLClient } = this.props;
    return (
      <ClientContext.Provider value={graphQLClient}>
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ClientContext.Provider>
    );
  }
}

export default withGraphQLClient(MyApp);
