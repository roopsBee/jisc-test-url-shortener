import { Button, TextField, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const useStyles = makeStyles({
  input: {},
  button: { height: '100%' },
})

type Inputs = {
  longUrl: string
}

const CreateUrlForm: React.FC = () => {
  const classes = useStyles()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
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
