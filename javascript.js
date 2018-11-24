function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
  console.log(arguments[3]);
}

func1(1, 2, 3, 4);

console.log(func1.length)

var bar = (...arguments) => console.log(arguments);

bar(1, 2)