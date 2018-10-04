import cx from 'classnames'

import { h, app } from 'hyperapp'

const styles = {
  style: require('css/style.css'),
  form: require('css/form.css')
}

const validate = (e) => {
  e.preventDefault()
  const form = document.getElementById("contact-form")
  if(form.reportValidity()) {
    grecaptcha.execute()
  }
}

export const Contact = () => (
  <div class={styles.style.container}>
    <h2 class={styles.style.heading}>Contact</h2>
    <div class={styles.form.container}>
      <form class={styles.form.form} id="contact-form" action="https://script.google.com/macros/s/AKfycbylioM8lYDDPxHI6HitD7ByH-tc7EXIC842VnyG4WUlbGGS3-A/exec" method="post">
        <label for="email" class={styles.form.label}>Email</label>
        <input type="email" name="email" class={styles.form.email} required />
        <label for="message" class={styles.form.label}>Message</label>
        <textarea name="message" class={styles.form.message} required></textarea>
        <input type="hidden" name="g-recaptcha-response" id="js-token" required />
        <button class={styles.form.submit}>
          送信する
        </button>
      </form>
    </div>
  </div>
)
