import { Route, Switch } from 'react-router-dom';

import MainNavigation from './layout/Navigation';
import Meetups from './pages/All'
import Favorites from './pages/Favorites'
import NewMeetup from './pages/New'

import './index.css';

const App = () => (
  <section>
      <h2>Meetups</h2>

      <MainNavigation/>

      <Switch>
          <Route path="/meetups" exact><Meetups/></Route>
          <Route path="/meetups/favorites"><Favorites/></Route>
          <Route path="/meetups/new"><NewMeetup/></Route>
      </Switch>
  </section>
)

export default App
