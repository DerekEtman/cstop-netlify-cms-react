import React from 'react'
import data from '../src/data.json'
import '../src/globalStyles.sass'
import About from '../src/views/About'
import Blog from '../src/views/Blog'
import Clients from '../src/views/Clients'
import Contact from '../src/views/Contact'
import Home from '../src/views/Home'
import Services from '../src/views/Services'
import SinglePost from '../src/views/SinglePost'

console.log('React version', React.version)

const CMS = window.CMS
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
)
CMS.registerPreviewStyle('/admin/cms.bundle.css')

const getDocument = (collection, name) =>
  data[collection] && data[collection].filter((page) => page.name === name)[0]
const getDocuments = (collection, name) => data[collection]

const globalSettings = getDocument('settings', 'global')
const posts = getDocuments('posts')

// Preview Templates
CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <Home fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('services-page', ({ entry }) => (
  <Services fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <About fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('clients-page', ({ entry }) => (
  <Clients fields={entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <Contact fields={entry.toJS().data} siteTitle={globalSettings.siteTitle} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <Blog fields={entry.toJS().data} posts={posts} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePost fields={entry.toJS().data} />
))

// Return to home when user logging out
window.netlifyIdentity.on('logout', function () {
  document.location.href = '/'
})

// Log netlifySiteURL if editing on localhost
if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  console.log(
    `%cnetlifySiteURL: ${window.localStorage.getItem('netlifySiteURL')}`,
    'color: hotpink; font-size: 15px'
  )
}
