import { Grid, Button, TextField } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useSelector } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';

const FormEncode = ({submit, children, value, change}) => {
  const loading = useSelector(state => state.loading);
  const click = e => {
    e.preventDefault()
  }
    return (
        <form onSubmit={submit}>
  {loading ? <Spinner/> : null}
        <div className="main">
         <Grid container alignItems='center' direction='column' spacing={2}>
         <Grid item>
             <Button type='submit' onClick={click}>
               {children}
               <ArrowUpwardIcon/>
             </Button>
           </Grid>  
           <Grid item>
           <TextField
              id="encoded"
              label="Encoded"
              multiline
              rows={4}
              variant="outlined"
              name='encode'
              value={value}
              onChange={change}          
            />
           </Grid>                    
         </Grid>
        </div>
        </form>
    )
}
export default FormEncode;