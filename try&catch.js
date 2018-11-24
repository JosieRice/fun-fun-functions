// function getMonthName(mo) {
//   mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
//   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
//     'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//   ];
//   try {
//     return months[mo];
//   } 
//   catch (err) {
//     return `your input was ${err}`;
//   }
// }

// console.log(getMonthName(3));


// try { // statements to try
//   monthName = getMonthName(myMonth); // function could throw exception
// } catch (e) {
//   monthName = 'unknown';
//   console.log(e); // pass exception object to error handler -> your own function
// }

// let json = "{ bad json }";
// let json = '{"name":"John", "age": 30}'; // data from the server

// try {

//   let user = JSON.parse(json); // <-- when an error occurs...
//   console.log(user.name); // John

// } catch (e) {
//   // ...the execution jumps here
//   console.log("Our apologies, the data has errors, we'll try to request it one more time.");
//   console.log(e.name);
//   console.log(e.message);
// }


let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors
  let something = user.name; // no name!

} catch (e) {
  console.log("doesn't execute");
}