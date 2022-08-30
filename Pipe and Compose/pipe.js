getName = (person) => person.name

uppercase = (string) => string.toUpperCase()

get6Characters = (string) => string.substring(0, 6)

reverse = (string) => string.split('').reverse().join('')

//Normally
reverse(get6Characters(uppercase(getName({ name: 'Buckethead' }))))

//WIth Pipe

//Pollyfill Pipe
pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

//expanded
pipe = (...functions) => (value) => {
  debugger
  return functions.reduce((currentValue, currentFunction) => {
    debugger
    return currentFunction(currentValue)
  }, value)
}

pipe(getName, uppercase, get6Characters, reverse)({ name: 'Buckethead' })

//What about compose()?
//So if you wanted the same result as our pipe above, you’d do the opposite.

compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x)

compose(reverse, get6Characters, uppercase, getName)({ name: 'Buckethead' })
