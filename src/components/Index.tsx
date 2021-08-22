import React, { useState } from 'react'
import {
  Container,
  Typography,
  Grid,
  Paper,
  makeStyles,
} from '@material-ui/core'
import { RouteComponentProps } from '@reach/router'
import CreateUrlForm from './CreateUrlForm'
import UrlList from './UrlList'

const useStyles = makeStyles({
  paper: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#9ad7edc3',
  },
})

const Index: React.FC<RouteComponentProps> = () => {
  const [urls, setUrls] = useState<{ long: string; short: string }[]>([])

  const classes = useStyles()
  return (
    <Container maxWidth="md">
      <Paper className={classes.paper} elevation={10}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography align="center" variant="h4" component="h2">
              Nano Url
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CreateUrlForm setUrls={setUrls} urls={urls} />
          </Grid>
          <Grid item xs={12}>
            <UrlList urls={urls} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Index
