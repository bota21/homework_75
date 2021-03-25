import { Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Main.css";
import {
  requestDataDecode,
  requestDataEncode,
  sendDecode,
  sendEncode,
} from "../../store/actions";
import FormDecode from "../../components/FormDecode/FormDecode";
import FormEncode from "../../components/FormEncode/FormEncode";

const Main = () => {
  const dispatch = useDispatch();
  const decode = useSelector((state) => state.decode);
  const encode = useSelector((state) => state.encode);
  const [inputValue, setInputValue] = useState([]);
  const password = "t";

  const changeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };

  const submitDecode = (e) => {
    e.preventDefalt();
    if (inputValue.password === password) {
      const data = { decode: inputValue.decode };
      dispatch(sendDecode(data));
      dispatch(requestDataEncode());
    }
  };

  const submitEncode = (e) => {
    e.preventDefalt();
    if (inputValue.password === password) {
      const data = { encode: inputValue.encode };
      dispatch(sendEncode(data));
      dispatch(requestDataDecode());
    }
  };

  return (
    <div className='main'>
      <Grid container alignItems='center' direction='column' spacing={2}>
        <FormDecode
          submit={e=>submitDecode(e)}
          value={decode.text}
          change={changeValue}
        />
        <Grid item>
          <TextField
            id='filled-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='filled'
            name='password'
            onChange={changeValue}
          />
        </Grid>
        <FormEncode
          submit={e=>submitEncode(e)}
          value={encode.text}
          change={changeValue}
        />
      </Grid>
    </div>
  );
};

export default Main;
