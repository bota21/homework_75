import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  POST_DATA_ENCODE,
  POST_DATA_DECODE,
  CHANGE_ENCODE,
  CHANGE_DECODE,
} from "./actionTypes";

const initialState = {
  decode: "",
  encode: "",
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.error, loading: false };
    case POST_DATA_ENCODE:
      return { ...state, loading: false, decode: action.data };
    case POST_DATA_DECODE:
      return { ...state, loading: false, encode: action.data };
    case CHANGE_ENCODE:
      return { ...state, encode: action.value };
    case CHANGE_DECODE:
      return { ...state, decode: action.value };
    default:
      return state;
  }
};

export default reducer;
