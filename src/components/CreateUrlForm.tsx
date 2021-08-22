import { Button, TextField, Grid, makeStyles } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const useStyles = makeStyles({
  input: {},
  button: { height: '40px' },
})

type Inputs = {
  longUrl: string
}

type Res = {
  data: { nanoId: string; longUrl: string }
}

interface Props {
  setUrls: React.Dispatch<
    React.SetStateAction<
      {
        long: string
        short: string
      }[]
    >
  >
  urls: {
    long: string
    short: string
  }[]
}

const CreateUrlForm: React.FC<Props> = ({ setUrls, urls }) => {
  const classes = useStyles()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async ({ longUrl }) => {
    try {
      const res: Res = await axios.post('/.netlify/functions/nano-url', {
        longUrl,
      })
      console.log(res.data)
      setUrls([...urls, { long: res.data.longUrl, short: res.data.nanoId }])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item container xs={8}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            error={!!errors.longUrl}
            label="Enter long URL"
            id="long-url-input"
            helperText={errors.longUrl && 'Please add a long url'}
            {...register('longUrl', { required: true })}
          />
        </Grid>
        <Grid item>
          <Button className={classes.button} type="submit" variant="outlined">
            Nano my Url
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default CreateUrlForm
