const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number) {
  return a * b;
};

// when we dont want to use return statement, we use void
const logger = (message: string): void => {
  console.log(message);
};

// when we dont expect function to return anything ever
const throwError = (message: string): never => {
  throw new Error(message);
};

// here, since we have return statement anyway, so annotation would be string
const throwNewError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  } else {
    return message;
  }
};
