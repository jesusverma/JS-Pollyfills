const users = [1, 2, 3, 4, 5]
function double(x) {
  return x + x
}
const newUsers = users.map(double)

//Polyyfl
Array.prototype.ourMap = function (callBack) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callBack(this[i]))
  }
  return newArray
}
console.log(users.ourMap(double))
