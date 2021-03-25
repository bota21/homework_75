import { Grid, Button, TextField } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useSelector } from "react-redux";
import Spinner from "../../UI/Spinner/Spinner";

const FormDecode = ({ submit, value, change }) => {
  const loading = useSelector(state => state.loading);
  return (
    <form onSubmit={submit}>
    {loading ? <Spinner/> : null}
      <div className='main'>
        <Grid container alignItems='center' direction='column' spacing={2}>
          <Grid item>
            <TextField
              id='decoded'
              label='Decoded'
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
