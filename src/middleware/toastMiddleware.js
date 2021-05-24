export const toastMiddleware = store => next => action => {
  if (action.error) {
    store.create({ text: action.error.toString(), timeout: 5000 });
  }
  next(action);
};
