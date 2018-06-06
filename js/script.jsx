import cx from "classnames"

import { h, app } from "hyperapp"
import { Link, Route } from "./scroll"
import { location } from "@hyperapp/router"

import { Works } from "./contents"

const styles = {
  style:    require("css/style.css"),
  nav:      require("css/navigation.css"),
  top:      require("css/top.css"),
  carousel: require("css/carousel.css"),
  form:     require("css/form.css")
}

const backgroundImages = [
  require("images/bg0.jpg"),
  require("images/bg1.jpg"),
  require("images/bg2.jpg"),
  require("images/bg3.jpg"),
  require("images/bg4.jpg"),
  require("images/bg5.png")
]

const Home = () => (
  <div class={cx(styles.style.container, styles.top.container)}>
    <h1 class={styles.top.heading}>Hiromi Ogawa / coord.e</h1>
    <h4 class={styles.top.description}>Software, Web, and Embedded System Developer</h4>
  </div>
)

const About = () => (
  <div class={styles.style.container}>
    <h2 class={styles.style.heading}>About</h2>
    <div class={styles.style.content}>
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
      <span class={styles.style.tag}>C++</span>
      <span class={styles.style.tag}>Python</span>
      <span class={styles.style.tag}>HTML5/CSS3/ES6</span>
      <span class={styles.style.tag}>Bash</span>
      <span class={styles.style.tag}>C</span>
      <span class={styles.style.tag}>Go</span>
      <h3>興味</h3>
      <span class={styles.style.tag}>低レイヤ技術</span>
      <span class={styles.style.tag}>Linuxカーネル</span>
      <span class={styles.style.tag}>Haskell</span>
      <span class={styles.style.tag}>インフラ技術</span>
      <span class={styles.style.tag}>機械学習</span>
    </div>
  </div>
)

const Contact = () => (
  <div class={styles.style.container}>
    <h2 class={styles.style.heading}>Contact</h2>
    <div class={styles.form.container}>
      <form class={styles.form.form}>
        <label for="email" class={styles.form.label}>Email</label>
        <input type="email" name="email" class={styles.form.email} />
        <label for="message" class={styles.form.label}>Message</label>
        <textarea name="message" class={styles.form.message}></textarea>
        <input type="submit" value="送信する" class={styles.form.submit} />
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

const view = (state, actions) => (
  <div>
    <header>
      <nav>
        <ul class={styles.nav.container}>
          {
            /* parseRoute() is better to compare pathname and view.path but simple comparison(===) works as well */
            views.map(view =>
              <li class={styles.nav.item}>
                <Link class={cx(styles.nav.link, {[`${styles.nav.here}`]: state.location.pathname === view.path})}
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
