import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { MockLink } from 'apollo-link-mock';
import { BrowserRouter as Router } from 'react-router-dom'


const withApolloAndRouterContext = ( WrappedComponent, mocks, history ) => 
  class extends Component {
  
  createClient = () => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      uri: new MockLink(mocks)
    });
  }
  render () {
    return (
      <Router>
        <ApolloProvider client={this.createClient()} >
          <ApolloHooksProvider client={this.createClient()}>
            <WrappedComponent history={history} />
          </ApolloHooksProvider>
        </ApolloProvider>
      </Router>
    )
  }
}

export default withApolloAndRouterContext