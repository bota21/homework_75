import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    marginRight: 65,
  },
});
const FormPassword = ({ change }) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.text}
      id='filled-password-input'
      label='Password'
      type='password'
      autoComplete='current-password'
      variant='filled'
      name='password'
      onChange={change}
    />
  );
};
export default FormPassword;
