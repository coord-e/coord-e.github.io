import cx from 'classnames'

import { h, app } from 'hyperapp'

import { IconLink } from '../Icon'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faRss from '@fortawesome/fontawesome-free-solid/faRss'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'

const styles = {
  style: require('css/style.css'),
  top: require('css/top.css')
}

export const Home = () => (
  <div class={cx(styles.style.container, styles.top.container)}>
    <h1 class={styles.top.heading}>Hiromi Ogawa / coord.e</h1>
    <h4 class={styles.top.description}>Software, Web, and Embedded System Developer</h4>
    <div class={styles.top.icons}>
      <IconLink src={faGithub} href="https://github.com/coord-e" target="_blank" class={styles.top.icon} />
      <IconLink src={faTwitter} href="https://twitter.com/coord_e" target="_blank" class={styles.top.icon} />
      <IconLink src={faRss} href="https://qiita.com/coord-e" target="_blank" class={styles.top.icon} />
      <IconLink src={faEnvelope} href="mailto:me@coord-e.com" target="_blank" class={styles.top.icon} />
    </div>
  </div>
)
