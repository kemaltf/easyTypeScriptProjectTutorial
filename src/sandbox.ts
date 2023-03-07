type StringOrNum = string | number;
const greet = (user: { name: string; uid: StringOrNum }) => {
  console.log(`${user.name} says hello!`);
};
const greetAgain = (user: { name: string; uid: StringOrNum }) => {
  console.log(`${user.name} says hello!`);
};
