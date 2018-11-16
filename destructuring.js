var animal = {
  species: 'dog',
  weight: 23,
  sound: 'woof'
};

var { species, sound } = animal;

console.log(`The ${species} says ${sound} !`);


makeSound({
  // species: 'dog',
  weight: 23,
  sound: 'woof'
});

function makeSound({species = "animal", sound}) {
  // var species = options.species = options.species || 'animal';
  // var sound = options.sound

  // var { species, sound } = options
  // species = species || 'animal'
  console.log(`The ${species} says ${sound} !`);
};

makeSoundES6 = ({ species = "animal", sound }) => {
  console.log(`ES6 - The ${ species } says ${ sound }!`);
}

makeSoundES6({
  // species: 'dog',
  weight: 23,
  sound: 'woof'
});

catSound({
  // sound: 'cat'
})

function catSound({sound = "meow"}) {
  console.log(`The cat says ${sound}`)
}