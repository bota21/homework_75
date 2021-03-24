import axios from "../axios/axiosDecode";
import {
  FETCH_DATA,
  FETCH_DATA_DECODE,
  FETCH_DATA_ENCODE,
  FETCH_DATA_ERROR,
  POST_DATA_DECODE,
  POST_DATA_ENCODE,
} from "./actionTypes";

const fetchData = () => {
  return { type: FETCH_DATA };
};
const fetchDataDecode = (data) => {
  return { type: FETCH_DATA_DECODE, data };
};
const fetchDataEncode = (data) => {
  return { type: FETCH_DATA_ENCODE, data };
};
const fetchDataError = (error) => {
  return { type: FETCH_DATA_ERROR, error };
};
const postDataDecode = () => {
  return { type: POST_DATA_DECODE };
};
const postDataEncode = () => {
    return { type: POST_DATA_ENCODE };
  };

export const requestDataDecode = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());
      const response = await axios.get("/decode");
      dispatch(fetchDataDecode(response.data));
    } catch (e) {
      dispatch(fetchDataError(e));
    }
  };
};
export const requestDataEncode = () => {
    return async (dispatch) => {
      try {
        dispatch(fetchData());
        const response = await axios.get("/encode");
        dispatch(fetchDataEncode(response.data));
      } catch (e) {
        dispatch(fetchDataError(e));
      }
    };
  };
  export const sendDecode = data => {
    return async (dispatch) => {
        try {
          dispatch(fetchData());
          await axios.post("/decode", data);
          dispatch(postDataDecode());
        } catch (e) {
          dispatch(fetchDataError(e));
        }
      };
  }
  export const sendEncode = data => {
    return async (dispatch) => {
        try {
          dispatch(fetchData());
          await axios.post("/encode", data);
          dispatch(postDataEncode());
        } catch (e) {
          dispatch(fetchDataError(e));
        }
      };
  }