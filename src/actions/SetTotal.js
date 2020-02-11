// const setTotal = (amount) => ({
//   type: "SET_TOTAL",
//   payload: amount
// })
const setTotal = (amount) => {
  console.log(amount)
  return {
    type: "SET_TOTAL",
    payload: amount
  }
}

export default setTotal;