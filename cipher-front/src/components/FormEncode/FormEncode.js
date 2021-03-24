import { Grid, Button, TextField } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const FormEncode = ({submit, label, value, change}) => {
    return (
        <form onSubmit={submit}>
        <div className="main">
         <Grid container alignItems='center' direction='column' spacing={2}>
         <Grid item>
             <Button type='submit'>
               <ArrowUpwardIcon/>
             </Button>
           </Grid>  
           <Grid item>
           <TextField
              id="encoded"
              label={label}
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