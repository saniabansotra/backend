//Synchronization
const timeTakingFunction = async () => {
  return "Hello World";
};

// console.log("After name consoled");

const callingAsyncFunction = async () => {
  const name = await timeTakingFunction(); //this will take time
  console.log(name);
};
callingAsyncFunction();
console.log("After Time Taking Function");

//Async way
//1. use the keyowrd async before the time taking function declaration (before fat)
//2.
