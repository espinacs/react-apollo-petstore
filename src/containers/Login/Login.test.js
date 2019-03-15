import React from 'react'
import { render, cleanup, fireEvent, wait } from 'react-testing-library';
import gql from 'graphql-tag';
import Login from './';
import withApolloAndRouterContext from '../../tests/withApolloAndRouterContext';

const DO_LOGIN = gql`
mutation ($username: String!, $password: String!) {
  loginUser(username: $username, password: $password)
}
`
const loginMock = [
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
  
afterEach(cleanup);

describe('Login', () => {
  test('renders without crashsing', () => {
    const WrappedLogin = withApolloAndRouterContext(Login, loginMock)
    const { container } = render(<WrappedLogin />)
    expect(container.firstChild).toBeTruthy()
  });

  test('does login', async () => {
    const historyMock = { push: jest.fn() }
    const WrappedLogin = withApolloAndRouterContext(Login, loginMock, historyMock)
    const { getByLabelText, getByText } = render(<WrappedLogin history={historyMock} />)
    
    fireEvent.change(getByLabelText('Username *'), { target: { value: 'user' } } )
    fireEvent.change(getByLabelText('Password *'), { target: { value: 'user' } } )    
    await wait( () => {
      getByText('Login').click();
    })

    // expect(historyMock.push).toBeCalledTimes(1)
    // expect(historyMock.push.mock.calls[0]).toBeCalledWith('/app')
  })
});