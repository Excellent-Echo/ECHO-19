import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// function loadLocalStorage() {
//   try {
//     const countryState = localStorage.getItem('country')
//     if (countryState === null) {
//       return undefined;
//     }
//   } catch (e) {
//     console.log(e)
//     return undefined
//   }
// }

// const persistedState = loadLocalStorage();

const store = createStore(
  combineReducers(rootReducer), 
  // persistedState,
  applyMiddleware(thunk)
  );

export default store;