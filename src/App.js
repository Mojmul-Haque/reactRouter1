// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import NoMatch from './Components/noMatch/NoMatch';
import UserDetails from './Components/UserDetails/UserDetails';

// const { default: Home } = require('./Components/Home/Home')

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      <Route path='/aboutUser/:userId'>
        <UserDetails></UserDetails>
      </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
