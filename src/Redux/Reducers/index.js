import { combineReducers } from "redux";
import { FetchallReducers, FetchoneReducer } from "./Reducer";

const reducer = combineReducers({
  allproducts: FetchallReducers,
  product: FetchoneReducer,
});

export default reducer;
