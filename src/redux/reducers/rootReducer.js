import covidReducer from "./covidReducer";
import detailReducer from "./detailReducer";
import globalReducer from "./globalReducer";

const rootReducer = {
  covid: covidReducer,
  detail: detailReducer,
  global: globalReducer,
};

export default rootReducer;

