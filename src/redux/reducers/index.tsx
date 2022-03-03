import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import user from "./user.reducer";

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    user,
  });

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
