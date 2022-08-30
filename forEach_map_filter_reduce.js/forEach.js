const names = ['ali', 'hamza', 'jack']
function consoleFunc(x) {
  console.log(x)
}
names.forEach(consoleFunc)

Array.prototype.ourForEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i])
  }
}
names.ourForEach(consoleFunc)
