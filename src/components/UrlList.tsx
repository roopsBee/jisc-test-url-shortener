import { Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  container: { margin: '10px 0px' },
})

interface Props {
  urls: { long: string; short: string }[]
}

const UrlList: React.FC<Props> = ({ urls }) => {
  const classes = useStyles()
  return (
    <Grid container justifyContent="center" className={classes.container}>
      {urls.map((url) => (
        <Grid item container key={url.short} justifyContent="center">
          <Grid xs={12}>
            <Divider variant="middle" />
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Typography>Long URL: {url.long}</Typography>
          </Grid>
          <Grid item container justifyContent="center" xs={12}>
            <Typography>
              Short Url: {`${window.location.origin}/${url.short}`}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default UrlList
