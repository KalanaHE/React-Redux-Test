export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const toggleLogin = () => {
  return {
    type: "SIGN_IN",
  };
};

export const textChange = (input) => {
  return {
    type: "TEXT_CHANGE",
    payload: input,
  };
};

export const requestAPIData = () => {
  return {
    type: "REQUEST_API_DATA",
  };
};

export const receiveAPIData = (data) => {
  return {
    type: "RECEIVE_API_DATA",
    payload: data,
  };
};
