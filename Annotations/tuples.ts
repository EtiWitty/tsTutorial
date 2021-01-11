const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 40];

// we can not say pepsi[0] = 40 for example
