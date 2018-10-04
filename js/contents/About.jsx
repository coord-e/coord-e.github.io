import cx from 'classnames'

import { h, app } from 'hyperapp'

const styles = {
  style: require('css/style.css')
}

export const About = () => (
  <div class={styles.style.container}>
    <h2 class={styles.style.heading}>About</h2>
    <div class={styles.style.content}>
      <h3>Rust, PythonとWebを書く高校生です</h3>
      <p>
        Rustで言語処理系を自作したり、シェルスクリプト(Bash)で小さなツールを書いたりするのが趣味です。<br/>
      </p>
      <p>
        フロントエンド・バックエンド共にWebサイトの開発経験があります。フロントエンドの方が好きです。<br/>
      </p>
      <p>
        また、ものづくりを楽しむ学生達のコミュニティ、Y-modifyの創設メンバーとして<br/>
        ヒューマノイドロボット"YamaX"の基板と、強化学習を使用した制御ソフトウェアを制作しています。<br/>
      </p>
      <h3>スキルセット</h3>
      <span class={styles.style.tag}>Rust</span>
      <span class={styles.style.tag}>C++</span>
      <span class={styles.style.tag}>Python</span>
      <span class={styles.style.tag}>HTML5/CSS3/ES6</span>
      <span class={styles.style.tag}>Bash</span>
      <h3>好きな技術</h3>
      <span class={styles.style.tag}>Infrastructure as Code</span>
      <span class={styles.style.tag}>Docker</span>
      <span class={styles.style.tag}>抽象化</span>
      <span class={styles.style.tag}>強化学習</span>
      <span class={styles.style.tag}>低レイヤ</span>
    </div>
  </div>
)
