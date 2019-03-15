import React, { useState } from 'react'
import { AUTH_TOKEN } from '../../constants'
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';
import Button from '../../components/Button'
import Input from '../../components/Input'
import styled from 'styled-components'

const DO_LOGIN = gql`
mutation ($username: String!, $password: String!) {
  loginUser(username: $username, password: $password)
}
`

const H3 = styled.h3`
  color: #1689d1;
  font-size: 18px;
`

function Login(props) {  
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const loginUser = useMutation(DO_LOGIN, {
    variables: {
      username, password
    },
    update: (proxy, mutationResult) => {
      if(mutationResult.data) {
        const token = mutationResult.data.loginUser.split(':')[1]
        localStorage.setItem(AUTH_TOKEN, token)
        props.history.push(`/app`)
      }
    },
  })

  // _saveUserData = token => {
  // }

  return (
    <div>
      <H3>Login</H3>
      <br/>
      <div>
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
          label="Username"
          name="username"
          required
          placeholder="Your username"
        />
        <br/><br/>
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          label="Password"
          name="password"
          required
          placeholder="Choose a safe password"
        />
      </div>
      <br/>
      <Button onClick={loginUser} primary>Login</Button>
        {/* { loading && <p>loading...</p> }
        { error && <p>login error!!</p> } */}
    </div>
  )
}

export default withRouter(Login)
// export default Login