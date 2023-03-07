let greet: Function;

greet = () => {
  console.log("hello");
};

// if we want to add optional parameter we can use 2 ways
// first, add '?' before ':' e.g: c?:
// second, we can add optional paramteter by using default value
const add = (a: number, b: number, c: number = 10) => {
  console.log(a + b);
};
add(5, 10);

const minus = (a: number, b: number): number => {
  return a - b;
};
let resMinus = minus(4, 3);
resMinus = "this gonna be an error";
