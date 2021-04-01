import axios from "../axios/axiosDecode";
import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  POST_DATA_DECODE,
  POST_DATA_ENCODE,
  CHANGE_DECODE,
  CHANGE_ENCODE,
} from "./actionTypes";

const fetchData = () => {
  return { type: FETCH_DATA };
};
const fetchDataError = (error) => {
  return { type: FETCH_DATA_ERROR, error };
};
const postDataDecode = (data) => {
  return { type: POST_DATA_DECODE, data };
};
const postDataEncode = (data) => {
  return { type: POST_DATA_ENCODE, data };
};
export const changeDecode = (value) => {
  return { type: CHANGE_DECODE, value };
};
export const changeEncode = (value) => {
  return { type: CHANGE_ENCODE, value };
};
export const sendDecode = (data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());
      const res = await axios.post("/decode", data);
      dispatch(postDataDecode(res.data));
    } catch (e) {
      dispatch(fetchDataError(e));
    }
  };
};
export const sendEncode = (data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());
      const res = await axios.post("/encode", data);
      dispatch(postDataEncode(res.data));
    } catch (e) {
      dispatch(fetchDataError(e));
    }
  };
};
