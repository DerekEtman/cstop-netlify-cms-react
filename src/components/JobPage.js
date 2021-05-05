import React, { useState } from 'react'
import Spinner from './Spinner'

export default () => {
  const [loading, setLoading] = useState(true)

  let iframe = () => {
    var ifr = document.getElementById('JotFormIFrame-203647725897067')

    if (window.location.href && window.location.href.indexOf('?') > -1) {
      var get = window.location.href.substr(
        window.location.href.indexOf('?') + 1
      )
      if (ifr && get.length > 0) {
        var src = ifr.src
        src = src.indexOf('?') > -1 ? src + '&' + get : src + '?' + get
        ifr.src = src
        ifr.src += (ifr.src.indexOf('?') > -1 ? '&' : '?') + 'isIframeEmbed=1'
      }
    }
  }

  let handleIFrameMessage = (e) => {
    if (typeof e.data === 'object') {
      return
    }

    let args = e.data.split(':')

    if (args.length > 2) {
      iframe = document.getElementById('JotFormIFrame-' + args[args.length - 1])
    } else {
      iframe = document.getElementById('JotFormIFrame')
    }

    if (!iframe) {
      return
    }

    switch (args[0]) {
      case 'scrollIntoView':
        iframe.scrollIntoView()
        break
      case 'setHeight':
        iframe.style.height = args[1] + 'px'
        break
      case 'collapseErrorPage':
        if (iframe.clientHeight > window.innerHeight) {
          iframe.style.height = window.innerHeight + 'px'
        }
        break
      case 'reloadPage':
        window.location.reload()
        break
      case 'loadScript':
        var src = args[1]
        if (args.length > 3) {
          src = args[1] + ':' + args[2]
        }
        var script = document.createElement('script')
        script.src = src
        script.type = 'text/javascript'
        document.body.appendChild(script)
        break
      case 'exitFullscreen':
        if (window.document.exitFullscreen) window.document.exitFullscreen()
        else if (window.document.mozCancelFullScreen)
          window.document.mozCancelFullScreen()
        else if (window.document.mozCancelFullscreen)
          window.document.mozCancelFullScreen()
        else if (window.document.webkitExitFullscreen)
          window.document.webkitExitFullscreen()
        else if (window.document.msExitFullscreen)
          window.document.msExitFullscreen()
        break
      default:
        break
    }

    var isJotForm = e.origin.indexOf('jotform') > -1 ? true : false

    if (
      isJotForm &&
      'contentWindow' in iframe &&
      'postMessage' in iframe.contentWindow
    ) {
      var urls = {
        docurl: encodeURIComponent(document.URL),
        referrer: encodeURIComponent(document.referrer),
      }
      iframe.contentWindow.postMessage(
        JSON.stringify({ type: 'urls', value: urls }),
        '*'
      )
    }
  }

  if (window.addEventListener) {
    window.addEventListener('message', handleIFrameMessage, false)
  } else if (window.attachEvent) {
    window.attachEvent('onmessage', handleIFrameMessage)
  }

  const hideSpinner = () => {
    setLoading(false)
  }

  return (
    <div style={{ alignSelf: 'center' }}>
      {loading ? <Spinner /> : null}
      <iframe
        id="JotFormIFrame-203647725897067"
        title="Client Estimate Request Form"
        onLoad={(window.parent.scrollTo(0, 0), hideSpinner)}
        allowTransparency="true"
        allowFullScreen="false"
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/203647725897067"
        frameBorder="0"
        style={{ minWidth: '100%', minHeight: '100vh',height:"100%", border: 'none' }}
        scrolling="yes"
      ></iframe>
    </div>
  )
}
