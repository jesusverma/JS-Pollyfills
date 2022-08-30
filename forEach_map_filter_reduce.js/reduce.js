const numbers = [1, 2, 3, 4, 5, 6]

function additionFunction(accumulator, current) {
  accumulator = accumulator + current
  return accumulator
}

const sum = numbers.reduce(additionFunction, 0)

console.log(sum)

//pllyfil
Array.prototype.ourReduce = function (callback, initialValue) {
  var accumulator = initialValue === undefined ? undefined : initialValue

  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this)
    } else {
      accumulator = this[i]
    }
  }
  return accumulator
}

console.log(numbers.ourReduce(additionFunction))
