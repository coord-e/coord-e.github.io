import { h } from "hyperapp"
import { polyfill } from "smoothscroll-polyfill"

polyfill()

function createMatch(isExact, path, url, params) {
  return {
    isExact: isExact,
    path: path,
    url: url,
    params: params
  }
}

function trimTrailingSlash(url) {
  for (var len = url.length; "/" === url[--len]; );
  return url.slice(0, len + 1)
}

export function parseRoute(path, url, options) {
  if (path === url || !path) {
    return createMatch(path === url, path, url)
  }

  var exact = options && options.exact
  var paths = trimTrailingSlash(path).split("/")
  var urls = trimTrailingSlash(url).split("/")

  if (paths.length > urls.length || (exact && paths.length < urls.length)) {
    return
  }

  for (var i = 0, params = {}, len = paths.length, url = ""; i < len; i++) {
    if (":" === paths[i][0]) {
      try {
        params[paths[i].slice(1)] = urls[i] = decodeURI(urls[i])
      } catch (_) {
        continue
      }
    } else if (paths[i] !== urls[i]) {
      return
    }
    url += urls[i] + "/"
  }

  return createMatch(false, path, url.slice(0, -1), params)
}

export function Link(props, children) {
  const to = props.to
  const location = props.location || window.location

  props.href = to
  props.onclick = function(e) {
    if (
      e.button !== 0 ||
      e.altKey ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      props.target === "_blank" ||
      e.currentTarget.origin !== location.origin
    ) {
    } else {
      e.preventDefault()

      if (to !== location.pathname) {
        history.pushState(location.pathname, "", to)
      }
    }
  }

  return h('a', props, children)
}

export function Route(props){
  const location = props.location || window.location
  const match = parseRoute(props.path, location.pathname, {
    exact: !props.parent
  })

  const element = props.render({
      location: location
  })

  if(match){
    const scroll = (e) => e.scrollIntoView({behavior: 'smooth', block:'start'})
    element.attributes.oncreate = scroll
    element.attributes.onupdate = scroll
  }

  return element
}

