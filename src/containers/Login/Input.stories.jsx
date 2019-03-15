import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import Login from './Login';
import gql from 'graphql-tag';

import jestTestResults from '../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import withApolloAndRouterContext from '../../tests/withApolloAndRouterContext';

export const wTests = withTests({
  results: jestTestResults,
  filesExt: ""
});

const DO_LOGIN = gql`
mutation ($username: String!, $password: String!) {
  loginUser(username: $username, password: $password)
}
`
const loginMocks = [
  {
    request: {
      mutation: DO_LOGIN,
      variables: {
        username: 'username',
        password: 'password',
      },
    },
    result: {
      data: {
        loginUser: 'logged in user session:1552584688752',
      },
    },
  },
];
  
storiesOf('Containers|Login', module)
  .addDecorator(wTests('Login'))
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    const WrappedLogin = withApolloAndRouterContext(loginMocks, Login)
    return <WrappedLogin />
  })
