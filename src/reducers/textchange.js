const textChangeReducer = (state = "", action) => {
  switch (action.type) {
    case "TEXT_CHANGE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default textChangeReducer;
