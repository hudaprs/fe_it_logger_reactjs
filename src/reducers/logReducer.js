import {
  SET_LOADING,
  GET_LOGS,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
} from "../actions/types";

const initialState = {
  logs: [],
  current: null,
  error: null,
  loading: false,
  isSuccess: false,
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
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, payload],
        loading: false,
        isSuccess: true,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== payload),
        loading: false,
        isSuccess: true,
      };
    case LOGS_ERROR:
      console.log(payload);
      return {
        ...state,
        error: payload,
        loading: false,
        isSuccess: false,
      };
    default:
      return state;
  }
};
