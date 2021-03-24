import { Grid, IconButton, TextField } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './Main.css';

const Main = () => {
  return (
    <form>
    <div className="main">
     <Grid container alignItems='center' direction='column' spacing={2}>
       <Grid item>
       <TextField
          id="decoded"
          label="Decoded message"
          multiline
          rows={4}
          variant="outlined"
        />
       </Grid>
       <Grid item>
         <IconButton>
           <ArrowDownwardIcon/>
         </IconButton>
       <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <IconButton>
          <ArrowUpwardIcon/>
        </IconButton>
       </Grid>
       <Grid item>
       <TextField
          id="encoded"
          label="Encoded message"
          multiline
          rows={4}
          variant="outlined"
        />
       </Grid>
     </Grid>
    </div>
    </form>
  );
}

export default Main;
