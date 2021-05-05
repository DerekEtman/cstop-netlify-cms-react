import {
  Card,
  CardHeader,
  Grid,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from '@material-ui/core'
import { min } from 'lodash'
import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import ClientVideoPage from './ClientVideoPage'
import './ClientVideoThumbnail.sass'

const useStyles = makeStyles((theme) => ({
  root:{ 
    // border:"1px solid blue",
    width:"100%",
    margin: "0 auto",
  },
  videoCard: {
    // width: '360px',
    // width: "max(360px,30%)",
    height: '200px',
    overflow: 'hidden',
    cursor: 'pointer',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: '0 auto',
  },
}))

export default (props) => {
  const classes = useStyles()
  const { clientName, videoThumbnail, videoURL, id } = props
  const { url, path } = useRouteMatch()
  console.log(props)

  return (
    <Grid item xs={12} sm={6} md={4} alignContent="center" className={classes.root}>
      <Link to={`${url}/${id}`} style={{border:"1px solid red"}}>
        <Card
          style={{
            backgroundImage: `url(${videoThumbnail})`,
          }}
          elevation={1}
          className={classes.videoCard}
        >
          {/* <img src={videoThumbnail} alt={clientName} /> */}
          <CardHeader
            title={clientName}
            className="client-video-bar"
          ></CardHeader>
        </Card>
      </Link>

      <Route path={`${path}/:id`}>
        <ClientVideoPage data={props} key={id} />
      </Route>
    </Grid>
  )
}
