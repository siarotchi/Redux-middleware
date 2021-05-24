import { combineReducers } from "redux";
import { filterTypes } from "../constants/constants";
import {
  SELECT_FILTER_TYPE,
  FETCH_RESOURCES,
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCES_ERROR,
  STOP_TIMER
} from "./actions";

function filters(
  state = {
    selected: filterTypes.users,
    itemsMap: {
      users: { key: filterTypes.users, label: "Users" },
      posts: { key: filterTypes.posts, label: "Posts" },
      albums: { key: filterTypes.albums, label: "Albums" }
    },
    status: filterTypes.status
  },
  action
) {
  switch (action.type) {
    case SELECT_FILTER_TYPE:
      return {
        ...state,
        selected: action.filterType
      };

    default:
      return state;
  }
}

function entities(
  state = {
    loading: false,
    error: null,
    itemsList: []
  },
  action
) {
  switch (action.type) {
    case FETCH_RESOURCES:
      return {
        ...state,
        loading: true
      };
    case FETCH_RESOURCES_SUCCESS:
      return {
        ...state,
        itemsList: action.entities || [],
        error: null,
        loading: false
      };
    case FETCH_RESOURCES_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case STOP_TIMER:
      return {
        ...state,
        itemsList: action.entities || []
        // error: null,
        // loading: false
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ filters, entities });

export default rootReducer;
