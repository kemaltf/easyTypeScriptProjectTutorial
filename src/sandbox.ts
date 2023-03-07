type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };
const greet = (user: objWithName) => {
  console.log(`${user.name} says hello!`);
};
const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello!`);
};
