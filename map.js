const arr = [1, 2, 3, 4, 5];

const doubled = arr.map(num => num * 2)
const squareroot = arr.map(Math.sqrt)

const doubled2 = arr.map(function (num) {
  return num * 2

})

// console.log('doubled', doubled)
// console.log('square root', squareroot)
// console.log('doubled2', doubled2)


const animals = [{
    name: 'Fluffykins',
    species: 'rabbit'
  },
  {
    name: 'Caro',
    species: 'dog'
  },
  {
    name: 'Hamilton',
    species: 'dog'
  },
  {
    name: 'Harold',
    species: 'fish'
  },
  {
    name: 'Ursula',
    species: 'cat'
  },
  {
    name: 'Jimmy',
    species: 'fish'
  },
  {
    name: 'Chairman Meow',
    species: 'cat'
  }
]

const names = animals.map(animal => animal.name)
const species = animals.map(animal => animal.species)

console.log('names', names)
console.log('species', species)