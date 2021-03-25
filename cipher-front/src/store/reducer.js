import {
  FETCH_DATA,
  FETCH_DATA_DECODE,
  FETCH_DATA_ERROR,
  FETCH_DATA_ENCODE,
  POST_DATA_ENCODE,
  POST_DATA_DECODE,
} from "./actionTypes";

const initialState = {
  decode: [],
  encode: [],
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.error, loading: false };
    case FETCH_DATA_DECODE:
      return { ...state, decode: action.data, loading: false };
    case FETCH_DATA_ENCODE:
      return { ...state, encode: action.data, loading: false };
    case POST_DATA_ENCODE:
        return {...state, loading: false};
    case POST_DATA_DECODE:
        return {...state, loading: false};
    default:
      return state;
  }
};

export default reducer;
