import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import cart from "./user.reducer";

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    cart,
  });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
