import cx from "classnames"

import { h } from 'hyperapp'

const styles = {
  style: require("css/style.css")
}

export const Icon = (props) => {
  const {
    src: {
      icon: [
        iconWidth,
        iconHeight,
        , ,
        iconPath
      ],
      iconName,
      prefix: iconPrefix
    },
    name = iconName,
    viewBox = `0 0 ${iconWidth} ${iconHeight}`,
    prefix = iconPrefix,
    path = iconPath
  } = props

  const className = props.class

  return <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    data-icon={ name }
    data-prefix={ prefix }
    class={cx(styles.style.icon, className)}
    viewBox={ viewBox }
  >
    <path fill="currentColor" d={path}></path>
  </svg>
}

export const IconLink = (props) => {
  const className = props.class
  delete props.class
  return (
    <a href={props.href} target={props.target} class={cx(styles.style.iconcontainer, className)}>
      <Icon {...props} />
      {props.showUrl ? <span class={styles.style.iconlink}>{props.href}</span> : null}
    </a>
  )
}
