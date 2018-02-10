import { h, app } from "hyperapp"
import { Link, Route, location } from "@hyperapp/router"

import styles from "../css/style.css"
import navigationStyles from "../css/navigation.css"

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Works = () => <h2>Works</h2>
const Contact = () => <h2>Contact</h2>

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
          <li class={navigationStyles.item}>
            <Link class={navigationStyles.link} to="/">coord.e</Link>
          </li>
          <li class={navigationStyles.item}>
            <Link class={navigationStyles.link} to="/about">about me</Link>
          </li>
          <li class={navigationStyles.item}>
            <Link class={navigationStyles.link} to="/works">my works</Link>
          </li>
          <li class={navigationStyles.item}>
            <Link class={navigationStyles.link} to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Route path="/" render={Home} />
      <Route path="/about" render={About} />
      <Route path="/works" render={Works} />
      <Route path="/contact" render={Contact} />
    </main>
  </div>
)

const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)
