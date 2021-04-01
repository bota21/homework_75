import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "./Main.css";
import {
  changeDecode,
  changeEncode,
  sendDecode,
  sendEncode,
} from "../../store/actions";
import FormCipher from "../../components/FormCipher";
import Spinner from "../../UI/Spinner/Spinner";
import FormPassword from "../../components/FormPassword";

const Main = () => {
  const dispatch = useDispatch();
  const decode = useSelector((state) => state.decode);
  const encode = useSelector((state) => state.encode);
  const loading = useSelector((state) => state.loading);
  const [state, setState] = useState("");

  const changeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const changeDecodeValue = (e) => {
    dispatch(changeDecode(e.target.value));
  };

  const changeEncodeValue = (e) => {
    dispatch(changeEncode(e.target.value));
  };

  const submitDecode = (e) => {
    e.preventDefault();
    const data = {
      password: state.password,
      message: decode,
    };
    dispatch(sendDecode(data));
  };

  const submitEncode = (e) => {
    e.preventDefault();
    const data = {
      password: state.password,
      message: encode,
    };
    dispatch(sendEncode(data));
  };

  return (
    <div className='main'>
      {loading ? <Spinner /> : null}
      <Grid container alignItems='center' direction='column' spacing={2}>
        <FormCipher
          label='Decode message'
          submit={submitDecode}
          value={decode}
          change={changeDecodeValue}>
          <ArrowDownwardIcon />
        </FormCipher>
        <FormPassword change={changeValue} />
        <FormCipher
          label='Encode message'
          submit={submitEncode}
          value={encode}
          change={changeEncodeValue}>
          <ArrowUpwardIcon />
        </FormCipher>
      </Grid>
    </div>
  );
};

export default Main;
