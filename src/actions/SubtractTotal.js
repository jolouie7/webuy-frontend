const setTotal = amount => {
  return {
    type: "SUBTRACT_TOTAL",
    payload: amount
  };
};

export default setTotal;
