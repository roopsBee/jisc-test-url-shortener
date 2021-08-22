import React from 'react'
import { PageProps } from 'gatsby'
import {
  Container,
  Typography,
  Grid,
  Paper,
  makeStyles,
} from '@material-ui/core'
import CreateUrlForm from '../components/CreateUrlForm'

const useStyles = makeStyles({
  paper: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#9ad7edc3',
  },
})

const Home: React.FC<PageProps> = () => {
  const classes = useStyles()
  return (
    <main>
      <Container maxWidth="sm">
        <Paper className={classes.paper} elevation={10}>
          <Grid container direction="column" alignContent="center">
            <Typography align="center" variant="h4" component="h2">
              Nano Url
            </Typography>
            <CreateUrlForm />
          </Grid>
        </Paper>
      </Container>
    </main>
  )
}

export default Home
