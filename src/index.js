import React from 'react'
import { render } from 'react-dom'
import 'modern-normalize/modern-normalize.css'
import './globalStyles.sass'
import App from './App'
import registerServiceWorker, { unregister } from './registerServiceWorker'
import data from './data.json'
require("dotenv").config();

const rootEl = document.getElementById('root')
render(<App />, rootEl)

// console.log(module);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp />, rootEl)
  })
}

if (process.env.REACT_APP_SITE_URL && 'localStorage' in window) {
  window.localStorage.setItem('netlifySiteURL', process.env.REACT_APP_SITE_URL)
}

const globalSettings =
  data.settings && data.settings.filter(doc => doc.name === 'global')[0]

if (globalSettings) {
  globalSettings.enableServiceWorker ? registerServiceWorker() : unregister()
}
