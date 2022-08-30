const logicAlbums = [
  {
    name: 'Bobby Tarantino',
    rating: 5,
  },
  { name: 'The Incredible True Story', rating: 4.5 },
  {
    name: 'Supermarket',
    rating: 4.9,
  },
  {
    name: 'Neon',
    rating: 4.2,
  },
  { name: 'Under Pressure', rating: 5 },
]

function greaterThan(x) {
  return x.rating > 4.5
}

const filtered = logicAlbums.filter(greaterThan)
console.log(filtered)

//Polyfil
Array.prototype.ourFilter = function (callBack) {
  let output = []
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i])) {
      output.push(this[i])
    }
  }
  return output
}

console.log(logicAlbums.ourFilter(greaterThan))
