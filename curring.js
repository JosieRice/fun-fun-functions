// let dragon = (name, size, element) => {
//   return `${name} is a ${size} dragon that breathes ${element}!`
// }

// console.log(dragon('Chairman Meow', 'fat', 'cuteness'));


let dragon = 
  name => 
    size => 
      element => {
        return `${name} is a ${size} dragon that breathes ${element}!`
      }
    
  

console.log(dragon('fluffy')('tiny')('water'))