import { SET_LOADING, GET_LOGS, LOGS_ERROR } from "../actions/types";

const initialState = {
  logs: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false,
      };
    case LOGS_ERROR:
      console.log(payload);
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
