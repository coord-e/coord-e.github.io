import cx from "classnames"

import { h, app } from "hyperapp"
import { Link, Route } from "./scroll"
import { location } from "@hyperapp/router"

import styles from "../css/style.css"
import navigationStyles from "../css/navigation.css"
import topStyles from "../css/top.css"
import carouselStyles from "../css/carousel.css"

import bg0 from "../images/bg0.jpg"
import bg1 from "../images/bg1.jpg"
import bg2 from "../images/bg2.jpg"
import bg3 from "../images/bg3.jpg"
import bg4 from "../images/bg4.jpg"
import bg5 from "../images/bg5.png"

const backgroundImages = [bg0, bg1, bg2, bg3, bg4, bg5]

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
          <h3>scopion</h3>
          <img class={carouselStyles.image} src="https://coord-e.com/images/works/scopion.png" />
          <p>a statically-typed functional programming language with powerful objective syntax</p>
        </li>
        <li class={carouselStyles.item}>
          <h3>scopion</h3>
          <img class={carouselStyles.image} src="https://coord-e.com/images/works/scopion.png" />
          <p>a statically-typed functional programming language with powerful objective syntax</p>
        </li>
        <li class={carouselStyles.item}>
          <h3>scopion</h3>
          <img class={carouselStyles.image} src="https://coord-e.com/images/works/scopion.png" />
          <p>a statically-typed functional programming language with powerful objective syntax</p>
        </li>
      </ul>
    </div>
  </div>
)

const Contact = () => (
  <div class={styles.container}>
    <h2 class={styles.heading}>Contact</h2>
    <div class={styles.content}>
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
