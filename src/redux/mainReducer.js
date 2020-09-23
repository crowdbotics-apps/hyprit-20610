import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard17107001Reducer from '../features/Dashboard17107001/redux/reducers'
import SignIn52106998Reducer from '../features/SignIn52106998/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard17107001: Dashboard17107001Reducer,
SignIn52106998: SignIn52106998Reducer,

});