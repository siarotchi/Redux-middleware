export const auth = store => next => action => {
  const checkStatus = store.getState().filters.status;

  if (checkStatus === "admin") {
    console.log("Status Confirmed. Welcome!");
    next(action);
  } else {
    next().send("No auth");
  }
};
