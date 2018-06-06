import { h, app } from "hyperapp"

const styles = {
  style: require("css/style.css"),
  form:     require("css/form.css")
}

export const Contact = () => (
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
