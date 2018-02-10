import { h, app } from "hyperapp"
import { Link, Route, location } from "@hyperapp/router"

import styles from "../css/style.css"
import navigationStyles from "../css/navigation.css"

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Works = () => <h2>Works</h2>
const Contact = () => <h2>Contact</h2>

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

const view = (state, actions) => (
  <div>
    <header>
      <nav>
        <ul class={navigationStyles.container}>
          {
            views.map(view =>
              <li class={navigationStyles.item}>
                <Link class={navigationStyles.link} to={view.path}>{view.display}</Link>
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
