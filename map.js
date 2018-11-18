const arr = [1, 2, 3, 4, 5];

const doubled = arr.map(num => num * 2)
const squareroot = arr.map(Math.sqrt)

const doubled2 = arr.map(function(num) {
  return num * 2

})

console.log('doubled', doubled)
console.log('square root', squareroot)
console.log('doubled2', doubled2)