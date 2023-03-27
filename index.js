//Synchronization
// const timeTakingFunction2 = async () => {
//   return "Hello World";
// };

// // console.log("After name consoled");

// const callingAsyncFunction2 = async () => {
//   const name = await timeTakingFunction(); //this will take time
//   console.log(name);
// };
// callingAsyncFunction();
// console.log("After Time Taking Function");

//Async way
//1. use the keyowrd async before the time taking function declaration (before fat)
//2.

const timeFunction = async () => {
  let a = 3;
  let b = 4;
  let c = a + b;
  return c;
};

const callingAsyncFunction = async () => {
  const name = await timeFunction(); //this will take time
  console.log(name);
};
callingAsyncFunction();
console.log("The sum of number is : ");
