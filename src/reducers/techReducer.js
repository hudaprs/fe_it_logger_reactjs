import { GET_TECHS, SET_LOADING, TECHS_ERROR } from "../actions/types";

const initialState = {
  techs: [],
  loading: false,
  errors: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TECHS_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    default:
      return state;
  }
};
