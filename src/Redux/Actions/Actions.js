import * as actions from "../Actions/ActionTypes";

export const FetchAll = (products) => {
  return {
    type: actions.FETCH_ALL,
    payload: products,
  };
};

export const FetchOne = (products) => {
  return {
    type: actions.FETCH_ONE,
    payload: products,
  };
};

export const RemoveOne = () => {
  return {
    type: actions.REMOVE_ONE,
  };
};
