import covidReducer from "./covidReducer";
import detailReducer from "./detailReducer";

const rootReducer = {
  covid: covidReducer,
  detail: detailReducer,
};

export default rootReducer;

