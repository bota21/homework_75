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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.error };
    case FETCH_DATA_DECODE:
      return { ...state, decode: action.data };
    case FETCH_DATA_ENCODE:
      return { ...state, encode: action.data };
    case POST_DATA_ENCODE:
        return {...state};
    case POST_DATA_DECODE:
        return {...state};
    default:
      return state;
  }
};

export default reducer;
