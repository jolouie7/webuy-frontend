const setTotal = amount => {
  console.log(amount);
  return {
    type: "SUBTRACT_TOTAL",
    payload: amount
  };
};

export default setTotal;
