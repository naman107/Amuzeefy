import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/" component={Login} exact />
      </Switch>
    </Router>
  )
}

export default App
