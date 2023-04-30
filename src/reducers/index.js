import exchangeReducer from "./exchangeReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    exchangeReducer,
});
export default allReducers;