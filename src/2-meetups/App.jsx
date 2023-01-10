import { Route, Switch } from 'react-router-dom'

import { FavoritesContextProvider } from './store/favorites'
import { MeetupsContextProvider } from './store/meetups'

import Meetups from './pages/All'
import Favorites from './pages/Favorites'
import NewMeetup from './pages/New'

import DocTitle from '../components/DocTitle'
import MainNavigation from './layout/Navigation'

import './index.css'

const App = () => (
  <MeetupsContextProvider>
  <FavoritesContextProvider>
      <section>
          <h2>Meetups</h2>

          <MainNavigation/>

          <Switch>
              <Route path="/meetups" exact>
                  <DocTitle>All meetups</DocTitle>
                  <Meetups/>
              </Route>
              <Route path="/meetups/favorites">
                  <DocTitle>Favorite meetups</DocTitle>
                  <Favorites/>
              </Route>
              <Route path="/meetups/new">
                  <DocTitle>New meetup</DocTitle>
                  <NewMeetup/>
              </Route>
          </Switch>
      </section>
  </FavoritesContextProvider>
  </MeetupsContextProvider>
)

export default App
