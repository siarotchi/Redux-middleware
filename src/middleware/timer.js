export const timer = store => next => action => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  if (action.type === "FETCH_RESOURCES") {
    console.log("DATE", date, "You have left 2 days");
  } else if (action.type === "STOP_TIMER") {
    console.log(date, "Your's time is Gone! ");
  }
  next(action);
};
