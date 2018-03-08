import cx from "classnames"

import { h, app } from "hyperapp"
import { Link, Route } from "./scroll"
import { location } from "@hyperapp/router"

import styles from "../css/style.css"
import navigationStyles from "../css/navigation.css"

import bg0 from "../images/bg0.jpg"
import bg1 from "../images/bg1.jpg"
import bg2 from "../images/bg2.jpg"
import bg3 from "../images/bg3.jpg"
import bg4 from "../images/bg4.jpg"

const backgroundImages = [bg0, bg1, bg2, bg3, bg4]

const Home = () => <h2 class={styles.heading}>Home</h2>
const About = () => <h2 class={styles.heading}>About</h2>
const Works = () => <h2 class={styles.heading}>Works</h2>
const Contact = () => <h2 class={styles.heading}>Contact</h2>

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

document.body.style.backgroundImage = `url(${backgroundImages[Math.floor(Math.random() * 5)]})`
document.body.style.backgroundSize = 'cover'
document.body.style.backgroundAttachment = 'fixed'

const view = (state, actions) => (
  <div>
    <header>
      <nav>
        <ul class={navigationStyles.container}>
          {
            /* parseRoute() is better to compare pathname and view.path but simple comparison(===) works as well */
            views.map(view =>
              <li class={navigationStyles.item}>
                <Link class={cx(navigationStyles.link, {[`${navigationStyles.here}`]: state.location.pathname === view.path})}
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
