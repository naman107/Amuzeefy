import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SearchTracks from './components/SeachTracks'
import SearchPlaylistsResult from './components/SearchPlaylistsResult'
import SearchTracksResult from './components/SearchTracksResult'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/" component={Login} exact />
        <Route path='/search' component={SearchTracks} exact />
        <Route path='/searchPlaylists' component={SearchPlaylistsResult} exact />
        <Route path='/searchTracks' component={SearchTracksResult} exact />
      </Switch>
    </Router>
  )
}

export default App
