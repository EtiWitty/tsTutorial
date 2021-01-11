interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

// "void" means functon returns nothing
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);
