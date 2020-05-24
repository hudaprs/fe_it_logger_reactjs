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

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
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

export const addLog = (log) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const newLog = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await newLog.json();

    dispatch({ type: ADD_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

export const updateLog = (log) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const updateLog = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await updateLog.json();

    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: DELETE_LOG, payload: id });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
