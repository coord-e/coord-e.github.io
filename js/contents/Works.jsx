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
    <div class={styles.carousel.imagecontainer}>
      <img class={styles.carousel.image} src={image} />
    </div>
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
          <div class={styles.carousel.links}>
            <IconLink src={faLink} href="https://scopion.coord-e.com/" target="_blank" class={styles.carousel.link}>
              Website
            </IconLink>
            <IconLink src={faGithub} href="https://github.com/coord-e/scopion" target="_blank" class={styles.carousel.link}>
              GitHub
            </IconLink>
          </div>
        </WorkItem>
        <WorkItem title="cart" image={images.cart}>
          Convert c/c++ code into compilable ascii art
          <div class={styles.carousel.links}>
            <IconLink src={faLink} href="https://qiita.com/coord-e/items/78fb116aa40ac4e9579b" target="_blank" class={styles.carousel.link}>
              Qiita
            </IconLink>
            <IconLink src={faGithub} href="https://github.com/coord-e/cart" target="_blank" class={styles.carousel.link}>
              GitHub
            </IconLink>
          </div>
        </WorkItem>
        <WorkItem title="validate.now" image={images.validate}>
          Simple schema validation app built with hyperapp
          <div class={styles.carousel.links}>
            <IconLink src={faLink} href="https://validate.now.sh" target="_blank" class={styles.carousel.link}>
              validate.now.sh
            </IconLink>
            <IconLink src={faGithub} href="https://github.com/coord-e/validate.now" target="_blank" class={styles.carousel.link}>
              GitHub
            </IconLink>
          </div>
        </WorkItem>
        <WorkItem title="Ozone Project" image={images.ozone}>
          Ozone Project brings more OS to Intel Edison. Currently Debian, CentOS, and Fedora are available
          <div class={styles.carousel.links}>
            <IconLink src={faLink} href="http://ozone.y-modify.org/" target="_blank" class={styles.carousel.link}>
              Website
            </IconLink>
          </div>
        </WorkItem>
        <WorkItem title="DSP6951 Driver Library for Arduino" image={images.dsp6951}>
          Arduino Library for DSP6951 DSP Radio IC.
          <div class={styles.carousel.links}>
            <IconLink src={faGithub} href="https://github.com/coord-e/DSP6951" target="_blank" class={styles.carousel.link}>
              GitHub
            </IconLink>
          </div>
        </WorkItem>
        <WorkItem title="ILI9328 Driver Library for Arduino" image={images.ili9328}>
          Library for colored graphics LCD with ILI9328 controller.
          <div class={styles.carousel.links}>
            <IconLink src={faGithub} href="https://github.com/coord-e/ili9328SPI" target="_blank" class={styles.carousel.link}>
              GitHub
            </IconLink>
          </div>
        </WorkItem>
      </ul>
    </div>
  </div>
)
