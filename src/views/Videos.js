import { Container, Grid, GridList, makeStyles } from '@material-ui/core'
import { uniqueId } from 'lodash'
import React from 'react'
import ClientVideoThumbnail from '../components/ClientVideoThumbnail'

const useStyles = makeStyles((theme) => ({
  root:{
    margin:"20px auto 50px",
    minHeight: "80vh",
    
  },
  gridList:{
    marginTop:"30px"
  }
  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-around',
  //   overflow: 'hidden',
  //   backgroundColor: theme.palette.background.paper,
  // },
  // icon: {
  //   color: 'rgba(255, 255, 255, 0.54)',
  // },
}))

export default ({ fields }) => {
  const classes = useStyles()
  const { videoList } = fields

  return (
    <div className={classes.root}>
      <Container  >
        <Grid container spacing={4} className={classes.gridList} xs={12} alignItems="center" >
          {videoList.map((videoInfo, index) => {
            return (
              <ClientVideoThumbnail
                clientName={videoInfo.clientName}
                videoThumbnail={videoInfo.clientVideoThumbnail}
                videoURL={videoInfo.clientVideoURL}
                key={uniqueId(`${videoInfo.clientName}_inner_${index}`)}
                id={index}
              />
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}
