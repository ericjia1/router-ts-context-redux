import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { history } from "../../route/history";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer, { AppState } from "../reducers";
import { AppActions } from "../constants/app.actions";

export const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      thunk as ThunkMiddleware<AppState, AppActions>,
      routerMiddleware(history)
    )
  )
);
