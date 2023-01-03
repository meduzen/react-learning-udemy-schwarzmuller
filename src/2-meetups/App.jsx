import { Route, Switch } from 'react-router-dom';

import Meetups from './pages/All'
import Favorites from './pages/Favorites'
import NewMeetup from './pages/New'

import './index.css';

const App = () => (
  <div>
      <h2>Meetups</h2>
      <Switch>
          <Route path="/meetups" exact><Meetups/></Route>
          <Route path="/meetups/favorites"><Favorites/></Route>
          <Route path="/meetups/new"><NewMeetup/></Route>
      </Switch>
  </div>
)

export default App
