import cx from 'classnames'

import { h, app } from 'hyperapp'

const styles = {
  style: require('css/style.css'),
  form: require('css/form.css')
}

export const Contact = () => (
  <div class={styles.style.container}>
    <h2 class={styles.style.heading}>Contact</h2>
    <div class={styles.form.container}>
      <form class={styles.form.form} id="contact-form" action="https://script.google.com/macros/s/AKfycbylioM8lYDDPxHI6HitD7ByH-tc7EXIC842VnyG4WUlbGGS3-A/exec" method="post">
        <label for="email" class={styles.form.label}>Email</label>
        <input type="email" name="email" class={styles.form.email} />
        <label for="message" class={styles.form.label}>Message</label>
        <textarea name="message" class={styles.form.message}></textarea>
        <button
          class={cx(styles.form.submit, "g-recaptcha")}
          data-sitekey="6LcFcEgUAAAAANjJW3BemaRnHeNDXQy6Pvz8ETgL"
          data-callback="onSubmit">
          送信する
        </button>
      </form>
    </div>
  </div>
)
