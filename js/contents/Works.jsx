import { h, app } from 'hyperapp'

import { IconLink, Icon } from '../Icon'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faLink from '@fortawesome/fontawesome-free-solid/faLink'

const styles = {
  style: require('css/style.css'),
  carousel: require('css/carousel.css')
}

const images = {
  scopion: require('images/works/scopion.png'),
  validate: require('images/works/validate.now.png'),
  cart: require('images/works/cart.png'),
  ozone: require('images/works/ozone.png'),
  ili9328: require('images/works/ili9328spi.jpg'),
  dsp6951: require('images/works/dsp6951.jpg')
}

const WorkItem = ({title, image}, children) => (
  <li class={styles.carousel.item}>
    <h3>{title}</h3>
    <img class={styles.carousel.image} src={image} />
    <p>{children}</p>
  </li>
)

export const Works = () => (
  <div class={styles.style.container}>
    <h2 class={styles.style.heading}>Works</h2>
    <div>
      <ul class={styles.carousel.container}>
        <WorkItem title="scopion programming language" image={images.scopion}>
          a statically-typed functional programming language with powerful objective syntax
          <div class={styles.carousel.icons}>
            <IconLink src={faLink} href="https://scopion.coord-e.com/" target="_blank" showUrl="true" class={styles.carousel.icon} />
            <IconLink src={faGithub} href="https://github.com/coord-e/scopion" target="_blank" class={styles.carousel.icon} />
          </div>
        </WorkItem>
        <WorkItem title="cart" image={images.cart}>
          Convert c/c++ code into compilable ascii art
        </WorkItem>
        <WorkItem title="validate.now" image={images.validate}>
          Simple schema validation app built with hyperapp
        </WorkItem>
        <WorkItem title="Ozone Project" image={images.ozone}>
          Ozone Project brings more OS to Intel Edison. Currently Debian, CentOS, and Fedora are available
        </WorkItem>
        <WorkItem title="DSP6951 Driver Library for Arduino" image={images.dsp6951}>
          Arduino Library for DSP6951 DSP Radio IC.
        </WorkItem>
        <WorkItem title="ILI9328 Driver Library for Arduino" image={images.ili9328}>
          Library for colored graphics LCD with ILI9328 controller.
        </WorkItem>
      </ul>
    </div>
  </div>
)
