export const getFromStorage = store => next => action => {
  console.log("filters", store.getState().filters);
  console.log("posts", store.getState().filters.itemsMap.posts);
  next(action);
};
