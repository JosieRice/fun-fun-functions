let me = 'Bruce Wayne';

greetMe = () => {
  console.log(`Hello ${me}!`);
}

greetMe()

me = 'Batman'

greetMe()


function makeFunc() {
  var name = 'Mozilla';

  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();