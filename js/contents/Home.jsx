import cx from "classnames"

import { h, app } from "hyperapp"

const styles = {
  style: require("css/style.css"),
  top:   require("css/top.css"),
}

export const Home = () => (
  <div class={cx(styles.style.container, styles.top.container)}>
    <h1 class={styles.top.heading}>Hiromi Ogawa / coord.e</h1>
    <h4 class={styles.top.description}>Software, Web, and Embedded System Developer</h4>
  </div>
)
