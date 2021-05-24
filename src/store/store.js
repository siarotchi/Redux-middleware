import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { logger } from "../middleware/logger";
import { getFromStorage } from "../middleware/getFromStorage";
import { auth } from "../middleware/auth";
import { timer } from "../middleware/timer";
// import { toastMiddleware } from "../middleware/toastMiddleware";
import { fetchResourcesMiddleware } from "../middleware/fetchResourcesMiddleware";

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      logger,
      auth,
      timer,
      // toastMiddleware,
      getFromStorage,
      fetchResourcesMiddleware
    )
  );
}
