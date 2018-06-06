import cx from "classnames"

import { h, app } from "hyperapp"
import { Link, Route } from "./scroll"
import { location } from "@hyperapp/router"

import styles from "../css/style.css"
import navigationStyles from "../css/navigation.css"
import topStyles from "../css/top.css"
import carouselStyles from "../css/carousel.css"
import formStyles from "../css/form.css"

const backgroundImages = [
  require("../images/bg0.jpg"),
  require("../images/bg1.jpg"),
  require("../images/bg2.jpg"),
  require("../images/bg3.jpg"),
  require("../images/bg4.jpg"),
  require("../images/bg5.png")
]

const images = {
 scopion:  require("../images/works/scopion.png"),
 validate: require("../images/works/validate.now.png"),
 cart:     require("../images/works/cart.png"),
 ozone:    require("../images/works/ozone.png"),
 ili9328:  require("../images/works/ili9328spi.jpg"),
 dsp6951:  require("../images/works/dsp6951.jpg")
}

const Home = () => (
  <div class={cx(styles.container, topStyles.container)}>
    <h1 class={topStyles.heading}>Hiromi Ogawa / coord.e</h1>
    <h4 class={topStyles.description}>Software, Web, and Embedded System Developer</h4>
  </div>
)

const About = () => (
  <div class={styles.container}>
    <h2 class={styles.heading}>About</h2>
    <div class={styles.content}>
      <h3>C++とWebの高校生エンジニアです</h3>
      <p>
        小学校の頃に電子工作に夢中になり、自由な動作を求めてPICマイコンのアセンブリを書き始めました。<br/>
        その後アセンブリ→C→C++と興味が移り、今はC++の最新規格を追うぐらいにはC++が好きになりました。<br/>
        今ではPythonにも手を出しています。
      </p>
      <p>
        Webはフロントエンドが主です。(React/Hyperapp/ES6/HTML5)<br/>
        Nodejsでバックエンドを書いたりもします。
      </p>
      <p>
        また、ものづくりを楽しむ学生達のコミュニティ、Y-modifyの創設メンバーとして<br/>
        ヒューマノイドロボット"YamaX"の基板とソフトウェアを制作しています。
      </p>
      <h3>言語</h3>
      <span class={styles.tag}>C++</span>
      <span class={styles.tag}>Python</span>
      <span class={styles.tag}>HTML5/CSS3/ES6</span>
      <span class={styles.tag}>Bash</span>
      <span class={styles.tag}>C</span>
      <span class={styles.tag}>Go</span>
      <h3>興味</h3>
      <span class={styles.tag}>低レイヤ技術</span>
      <span class={styles.tag}>Linuxカーネル</span>
      <span class={styles.tag}>Haskell</span>
      <span class={styles.tag}>インフラ技術</span>
      <span class={styles.tag}>機械学習</span>
    </div>
  </div>
)

const Works = () => (
  <div class={styles.container}>
    <h2 class={styles.heading}>Works</h2>
    <div>
      <ul class={carouselStyles.container}>
        <li class={carouselStyles.item}>
          <h3>scopion programming language</h3>
          <img class={carouselStyles.image} src={images.scopion} />
          <p>a statically-typed functional programming language with powerful objective syntax</p>
        </li>
        <li class={carouselStyles.item}>
          <h3>cart</h3>
          <img class={carouselStyles.image} src={images.cart} />
          <p>Convert c/c++ code into compilable ascii art</p>
        </li>
        <li class={carouselStyles.item}>
          <h3>validate.now</h3>
          <img class={carouselStyles.image} src={images.validate} />
          <p>Simple schema validation app built with hyperapp</p>
        </li>
        <li class={carouselStyles.item}>
          <h3>Ozone Project</h3>
          <img class={carouselStyles.image} src={images.ozone} />
          <p>Ozone Project brings more OS to Intel Edison. Currently Debian, CentOS, and Fedora are available.</p>
        </li>
        <li class={carouselStyles.item}>
          <h3>DSP6951 Driver Library for Arduino</h3>
          <img class={carouselStyles.image} src={images.dsp6951} />
          <p>Arduino Library for DSP6951 DSP Radio IC.</p>
        </li>
        <li class={carouselStyles.item}>
          <h3>ILI9328 Driver Library for Arduino</h3>
          <img class={carouselStyles.image} src={images.ili9328} />
          <p>Library for colored graphics LCD with ILI9328 controller.</p>
        </li>
      </ul>
    </div>
  </div>
)

const Contact = () => (
  <div class={styles.container}>
    <h2 class={styles.heading}>Contact</h2>
    <div class={formStyles.container}>
      <form class={formStyles.form}>
        <label for="email" class={formStyles.label}>Email</label>
        <input type="email" name="email" class={formStyles.email} />
        <label for="message" class={formStyles.label}>Message</label>
        <textarea name="message" class={formStyles.message}></textarea>
        <input type="submit" value="送信する" class={formStyles.submit} />
      </form>
    </div>
  </div>
)

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
