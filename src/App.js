import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ClientVideoPage from './components/ClientVideoPage'
import Footer from './components/Footer'
import FormsPage from './components/FormRouter'
import JobPage from './components/JobPage'
import Meta from './components/Meta'
import Nav from './components/Nav'
import QuotePage from './components/Quote'
import ScrollToTop from './components/ScrollToTop'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import data from './data.json'
// import { getCollectionTerms } from './util/collection'
import About from './views/About'
import Clients from './views/Clients'
import Contact from './views/Contact'
import Home from './views/Home'
import NoMatch from './views/NoMatch'
import Services from './views/Services'
import Videos from './views/Videos'
// import SinglePost from './views/SinglePost'
import { slugify } from './util/url'

AOS.init()

const RouteWithMeta = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={(routeProps) => (
      <Fragment>
        <Meta {...props} />
        <Component {...routeProps} {...props} />
      </Fragment>
    )}
  />
)

function App() {
  const getDocument = (collection, name) =>
    data[collection] && data[collection].filter((page) => page.name === name)[0]

  const getDocuments = (collection) => data[collection] || []

  const globalSettings = getDocument('settings', 'global')

  const {
    siteTitle,
    siteUrl,
    siteDescription,
    socialMediaCard,
    headerScripts,
  } = globalSettings

  // const posts = getDocuments('posts').filter((post) => post.status !== 'Draft')
  // const videos = getDocuments('pages').filter((post) => post.status !== 'Draft')
  const videos = getDocument('pages', 'videos')
  const videoList = videos.videoList ? videos.videoList : ['']

  // console.log(videoList)

  // const categoriesFromPosts = getCollectionTerms(posts, 'categories')

  // const postCategories = getDocuments('postCategories').filter(
  //   (category) => categoriesFromPosts.indexOf(category.name.toLowerCase()) >= 0
  // )

  document.getElementById('root').style.height = '100vh'

  return (
    <Router>
      <div className="react-wrap">
        <ScrollToTop />
        <ServiceWorkerNotifications reloadOnUpdate />

        <Helmet defaultTitle={siteTitle} titleTemplate={`${siteTitle} | %s`} />

        <Meta
          headerScripts={headerScripts}
          absoluteImageUrl={
            socialMediaCard &&
            socialMediaCard.image &&
            siteUrl + socialMediaCard.image
          }
          twitterCreatorAccount={
            socialMediaCard && socialMediaCard.twitterCreatorAccount
          }
          twitterSiteAccount={
            socialMediaCard && socialMediaCard.twitterSiteAccount
          }
          linkedInSiteAccount={
            socialMediaCard && socialMediaCard.linkedInSiteAccount
          }
        />

        <Nav />

        <Switch>
          <RouteWithMeta
            path="/"
            exact
            component={Home}
            description={siteDescription}
            fields={getDocument('pages', 'home')}
          />
          <RouteWithMeta
            path="/services/"
            exact
            component={Services}
            fields={getDocument('pages', 'services')}
          />

          {/* <Route
            path="/about/videos/:id"
            exact
            render={(props) => {
              return <ClientVideoPage {...props} />
            }}
          /> */}

          {videoList.map((video, index) => {
            const path = slugify(`/about/videos/${index}`)
            console.log('Path', path)
            const nextVideo = video[index - 1]
            const prevVideo = video[index + 1]
            return (
              <RouteWithMeta
                key={path}
                path={path}
                exact
                component={ClientVideoPage}
                fields={video}
                nextVideoURL={
                  nextVideo && slugify(`/videos/${nextVideo.title}/`)
                }
                prevVideoURL={
                  prevVideo && slugify(`/videos/${prevVideo.title}/`)
                }
              />
            )
          })}

          <RouteWithMeta
            path="/about/videos"
            exact
            component={Videos}
            fields={getDocument('pages', 'videos')}
          />

          <RouteWithMeta
            path="/about/clients"
            exact
            component={Clients}
            fields={getDocument('pages', 'clients')}
          />

          <RouteWithMeta
            path="/about/"
            exact
            component={About}
            fields={getDocument('pages', 'about')}
          />

          <RouteWithMeta
            path="/contact/"
            exact
            component={Contact}
            fields={getDocument('pages', 'contact')}
            siteTitle={siteTitle}
          />

          <Route path="/quote/" exact component={QuotePage} />

          <Route path="/forms/" component={FormsPage} />

          {/* <Route
            path={`/forms/:id`}
            exact
            render={(props) => {
              return <FormsPage {...props} data={formList} />
            }}
          /> */}

          <Route path="/apply/" exact component={JobPage} />

          {/* <RouteWithMeta
            path="/blog/"
            exact
            component={Blog}
            fields={getDocument('pages', 'blog')}
            posts={posts}
            postCategories={postCategories}
          /> */}

          {/* {posts.map((post, index) => {
            const path = slugify(`/blog/${post.title}`)
            const nextPost = posts[index - 1]
            const prevPost = posts[index + 1]
            return (
              <RouteWithMeta
                key={path}
                path={path}
                exact
                component={SinglePost}
                fields={post}
                nextPostURL={nextPost && slugify(`/blog/${nextPost.title}/`)}
                prevPostURL={prevPost && slugify(`/blog/${prevPost.title}/`)}
              />
            )
          })} */}

          {/* {postCategories.map((postCategory) => {
            const slug = slugify(postCategory.title)
            const path = slugify(`/blog/category/${slug}`)
            const categoryPosts = posts.filter((post) =>
              documentHasTerm(post, 'categories', slug)
            )
            return (
              <RouteWithMeta
                key={path}
                path={path}
                exact
                component={Blog}
                fields={getDocument('pages', 'blog')}
                posts={categoryPosts}
                postCategories={postCategories}
              />
            )
          })} */}
          <Route render={() => <NoMatch siteUrl={siteUrl} />} />
        </Switch>
        <Footer globalSettings={globalSettings} />
      </div>
    </Router>
  )
}
export default App
