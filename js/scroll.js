import { h } from 'hyperapp'
import { polyfill } from 'smoothscroll-polyfill'

polyfill()

let clicked = false

// createMatch(), trimTrailingSlash(), and parseRoute() are from hyperapp/router
// Copyright © 2017-present Jorge Bucaran
// Licensed under MIT License.

function createMatch (isExact, path, url, params) {
  return {
    isExact: isExact,
    path: path,
    url: url,
    params: params
  }
}

function trimTrailingSlash (url) {
  for (var len = url.length; url[--len] === '/';);
  return url.slice(0, len + 1)
}

export function parseRoute (path, url, options) {
  if (path === url || !path) {
    return createMatch(path === url, path, url)
  }

  var exact = options && options.exact
  var paths = trimTrailingSlash(path).split('/')
  var urls = trimTrailingSlash(url).split('/')

  if (paths.length > urls.length || (exact && paths.length < urls.length)) {
    return
  }

  url = ''
  let params = {}
  for (let i = 0, len = paths.length; i < len; i++) {
    if (paths[i][0] === ':') {
      try {
        params[paths[i].slice(1)] = urls[i] = decodeURI(urls[i])
      } catch (_) {
        continue
      }
    } else if (paths[i] !== urls[i]) {
      return
    }
    url += urls[i] + '/'
  }

  return createMatch(false, path, url.slice(0, -1), params)
}

export function Link (props, children) {
  const to = props.to
  const location = props.location || window.location

  props.href = to
  props.onclick = function (e) {
    if (
      e.button !== 0 ||
      e.altKey ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      props.target === '_blank' ||
      e.currentTarget.origin !== location.origin
    ) {
    } else {
      e.preventDefault()

      if (to !== location.pathname) {
        clicked = true
        history.pushState(location.pathname, '', to)
      }
    }
  }

  return h('a', props, children)
}

export function Route (props) {
  const location = props.location || window.location
  const match = parseRoute(props.path, location.pathname, {
    exact: !props.parent
  })

  const element = props.render({
    location: location
  })

  const handleEvent = (e) => (event) => {
    if (window.pageYOffset + window.innerHeight >= e.offsetTop &&
       window.pageYOffset + window.innerHeight <= e.offsetTop + e.offsetHeight) {
      if (!clicked && location.pathname !== props.path) {
        history.replaceState(location.pathname, '', props.path)
      }
    }
  }

  element.attributes.oncreate = (e) => {
    window.addEventListener('scroll', handleEvent(e))
  }
  element.attributes.ondestroy = (e) => {
    window.removeEventListener('scroll', handleEvent(e))
  }

  if (match) {
    const scroll = (e) => e.scrollIntoView({behavior: 'smooth', block: 'start'})
    element.attributes.oncreate = (e) => {
      scroll(e)
      window.addEventListener('scroll', handleEvent(e))
    }
    element.attributes.onupdate = (e) => {
      if (clicked) {
        scroll(e)
        clicked = false
      }
    }
  }

  return element
}
