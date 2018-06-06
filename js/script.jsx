import cx from "classnames"

import { h, app } from "hyperapp"
import { Link, Route } from "./scroll"
import { location } from "@hyperapp/router"

import { Home, About, Works, Contact } from "./contents"

const styles = {
  style:    require("css/style.css"),
  nav:      require("css/navigation.css"),
  top:      require("css/top.css"),
  carousel: require("css/carousel.css"),
  form:     require("css/form.css")
}

const backgroundImages = [
  require("images/bg0.jpg"),
  require("images/bg1.jpg"),
  require("images/bg2.jpg"),
  require("images/bg3.jpg"),
  require("images/bg4.jpg"),
  require("images/bg5.png")
]


const views = [
  {
    path:"/",
    display: "coord.e",
    view: Home
  },
  {
    path:"/about",
    display: "about me",
    view: About
  },
  {
    path:"/works",
    display: "my works",
    view: Works
  },
  {
    path:"/contact",
    display: "contact",
    view: Contact
  }
];

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
      <nav>
        <ul class={styles.nav.container}>
          {
            /* parseRoute() is better to compare pathname and view.path but simple comparison(===) works as well */
            views.map(view =>
              <li class={styles.nav.item}>
                <Link class={cx(styles.nav.link, {[`${styles.nav.here}`]: state.location.pathname === view.path})}
                      to={view.path}>
                  {view.display}
                </Link>
              </li>
            )
          }
        </ul>
      </nav>
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
