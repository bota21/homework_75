import { Grid, Button, TextField } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const FormDecode = ({ submit, label, value, change }) => {
  return (
    <form onSubmit={submit}>
      <div className='main'>
        <Grid container alignItems='center' direction='column' spacing={2}>
          <Grid item>
            <TextField
              id='decoded'
              label={label}
              multiline
              rows={4}
              variant='outlined'
              name='decode'
              value={value}
              onChange={change}
            />
          </Grid>
          <Grid item>
            <Button type='submit'>
              <ArrowDownwardIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};
export default FormDecode;
