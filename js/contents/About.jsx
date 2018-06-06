import cx from 'classnames'

import { h, app } from 'hyperapp'

const styles = {
  style: require('css/style.css')
}

export const About = () => (
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
