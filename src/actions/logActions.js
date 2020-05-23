import { SET_LOADING, GET_LOGS, LOGS_ERROR } from "../actions/types";

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

export const getLogs = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const logs = await fetch("/logs");
    const data = await logs.json();

    dispatch({ type: GET_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};
