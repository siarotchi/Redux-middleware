import apiService from "../services/api";

export const SELECT_FILTER_TYPE = "SELECT_FILTER_TYPE";
export const FETCH_RESOURCES = "FETCH_RESOURCES";
export const FETCH_RESOURCES_SUCCESS = "FETCH_RESOURCES_SUCCESS";
export const FETCH_RESOURCES_ERROR = "FETCH_RESOURCES_ERROR";
export const STOP_TIMER = "STOP_TIMER";

export function selectSubredditType(filterType) {
  return {
    type: SELECT_FILTER_TYPE,
    filterType
  };
}

export function fetchResources(filterType) {
  return {
    type: FETCH_RESOURCES,
    filterType
  };
}

export function fetchResourcesSuccess(filterType, data) {
  return {
    type: FETCH_RESOURCES_SUCCESS,
    filterType,
    entities: data
  };
}

export function fetchResourcesError(filterType, error) {
  return {
    type: FETCH_RESOURCES_ERROR,
    filterType,
    error
  };
}
export function timerStart(filterType) {
  return {
    type: STOP_TIMER
  };
}

export function fetchResourcesType(filterType) {
  return dispatch => {
    dispatch(fetchResources(filterType));

    return apiService
      .getItems(filterType)
      .then(data => dispatch(fetchResourcesSuccess(filterType, data)))
      .catch(error => dispatch(fetchResourcesError(filterType, error)));
  };
}
