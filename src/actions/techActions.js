import { SET_LOADING, TECHS_ERROR, GET_TECHS } from "./types";

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getTechs = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const techs = await fetch(`/techs`);
    const data = await techs.json();

    dispatch({ type: GET_TECHS, payload: data });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.statusText });
  }
};
