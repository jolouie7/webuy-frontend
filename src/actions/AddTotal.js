const setTotal = (amount) => {
  return {
    type: "ADD_TOTAL",
    payload: amount
  }
}

export default setTotal;