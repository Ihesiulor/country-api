export const twoDArray = (arr, n) => {
  return new Array(Math.ceil(arr.length / n))
  .fill()
  .map(_ => arr.splice(0, n))
};