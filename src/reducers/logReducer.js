import {
  SET_LOADING,
  GET_LOGS,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
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
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) => (log.id === payload.id ? payload : log)),
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== payload),
        loading: false,
        isSuccess: true,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
        loading: false,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false,
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
