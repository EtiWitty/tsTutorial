const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date()];
const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when excracting values
// TS can do type inference when extracting values from an array
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// TS can prevent us from adding incompatible values to the array
carMakers.push(100);

// Help with 'map'
// We can help with 'map', 'forEach', 'reduce' functions
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible
const importantDates: (Date | string)[] = [];
importantDates.push("2020-10-10");
importantDates.push(new Date());
