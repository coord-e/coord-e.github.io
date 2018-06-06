import cx from "classnames"

import { h, app } from "hyperapp"
import { Link } from "../scroll"

const styles = {
  style: require("css/style.css"),
  nav:   require("css/navigation.css"),
}

export const Navigation = ({views, location}) => (
  <nav>
    <ul class={styles.nav.container}>
      {
        /* parseRoute() is better to compare pathname and view.path but simple comparison(===) works as well */
        views.map(view =>
          <li class={styles.nav.item}>
            <Link class={cx(styles.nav.link, {[`${styles.nav.here}`]: location.pathname === view.path})}
                  to={view.path}>
              {view.display}
            </Link>
          </li>
        )
      }
    </ul>
  </nav>
)
