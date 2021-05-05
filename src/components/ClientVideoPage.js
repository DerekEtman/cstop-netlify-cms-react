import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import ReactPlayer from 'react-player'

import './ClientVideoPage.css'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '20px',
  },
  videoPlayer: {
    margin: '20px',
  },
  videoDetails: {
    // border: '1px solid green',
    width: '100%',
    minHeight: '20vh',
    margin: '0 auto',
  },
  videoText: {
    padding: '10px 20px',
    margin: '0 auto',
    textAlign: 'center',
  },
  playerWrapper: {
    // border: "1px solid red",
    position:" relative",
    paddingTop: "56.25%",
    margin: "0 auto",
  },
  reactPlayer: {
    // border: ' 3px solid greenyellow',
    position: 'absolute',
    margin: '0 auto',
    top: 0,
    left: "10%",

  },
}))

export default function ClientVideoPage({ fields, ...props }) {
  const classes = useStyles()
  const { clientName, clientVideoThumbnail, clientVideoURL } = fields

  console.log(props)
  return (
    <div>
      <Container className={classes.container}>
        <div className={classes.playerWrapper}>
          <ReactPlayer
            controls
            url={clientVideoURL}
            playIcon
            width="80%"
            height="80%"
            className={classes.reactPlayer}
          />
        </div>
        <Box className={classes.videoDetails}>
          <h1 className={classes.videoText}>{clientName}</h1>
        </Box>
      </Container>
    </div>
  )
}
