import { Grid, Button, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    marginTop: 40,
  },
});

const FormCipher = ({ label, submit, value, change, children }) => {
  const classes = useStyles();

  return (
    <form onSubmit={submit}>
      <div className='main'>
        <Grid container alignItems='center' direction='column' spacing={2}>
          <Grid item>
            <TextField
              multiline
              rows={4}
              variant='outlined'
              label={label}
              name='message'
              value={value}
              onChange={change}
            />
            <Button type='submit' className={classes.button}>
              {children}
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};
export default FormCipher;
