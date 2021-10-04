const arr = process.argv.slice(2).map(elem=> Number(elem))
const sum = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
)
console.log(sum)