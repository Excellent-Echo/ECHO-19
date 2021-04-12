import covidReducer from "./covidReducer";
import detailReducer from "./detailReducer";
import globalReducer from "./globalReducer";
import mostAffReducer from "./mostAffReducer";
import regionReducer from "./regionReducer";

const rootReducer = {
  covid: covidReducer,
  detail: detailReducer,
  global: globalReducer,
  region: regionReducer,
  most: mostAffReducer,
};

export default rootReducer;

