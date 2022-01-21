import * as actions from "../Actions/ActionTypes";

const initialvalue = {
  products: [],
};

export const FetchallReducers = (state = initialvalue, { type, payload }) => {
  switch (type) {
    case actions.FETCH_ALL:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const FetchoneReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actions.FETCH_ONE:
      return { ...state, ...payload };

    case actions.REMOVE_ONE:
      return {};

    default:
      return state;
  }
};
