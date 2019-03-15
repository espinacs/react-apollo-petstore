import React  from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from './containers/Login/Login'
import Home from './containers/Home/Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/app" component={Home} />
    {/* <Route exact path="/register" component={Register} /> */}
  </Switch>
)

export default App;
