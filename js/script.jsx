import cx from 'classnames'

import { h, app } from 'hyperapp'
import { Route } from './scroll'
import { location } from '@hyperapp/router'

import { Navigation, Home, About, Works, Contact } from './contents'

const backgroundImages = [
  require('images/bg0.jpg'),
  require('images/bg1.jpg'),
  require('images/bg2.jpg'),
  require('images/bg3.jpg'),
  require('images/bg4.jpg'),
  require('images/bg5.png'),
  require('images/bg6.jpg')
]

const views = [
  {
    path: '/',
    display: 'coord.e',
    view: Home
  },
  {
    path: '/about',
    display: 'about me',
    view: About
  },
  {
    path: '/works',
    display: 'my works',
    view: Works
  },
  {
    path: '/contact',
    display: 'contact',
    view: Contact
  }
]

const state = {
  location: location.state
}

const actions = {
  location: location.actions
}

document.body.style.backgroundImage = `url(${backgroundImages[Math.floor(Math.random() * backgroundImages.length)]})`

const view = (state, actions) => (
  <div>
    <header>
      <Navigation views={views} location={state.location} />
    </header>
    <main>
      {
        views.map(view =>
          <Route path={view.path} render={view.view} />
        )
      }
    </main>
  </div>
)

const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)
