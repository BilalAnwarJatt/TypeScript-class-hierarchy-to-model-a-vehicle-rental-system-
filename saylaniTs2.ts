//TypeScript class hierarchy to model a vehicle rental system:
abstract class Vehicle {
    private make: string;
    private model: string;
    private year: number;
    private rented: boolean;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = false;
    }
  // getter
    get ForMake(): string {
      return this.make;
    }
  
    get ForModel(): string {
      return this.model;
    }
  
    get forYear(): number {
      return this.year;
    }
  
    get carRented(): boolean {
      return this.rented;
    }
  // setter
    set carRented(rented: boolean){
      this.rented = rented;
    }
  // abstract method
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.rented) {
        console.log("The vehicle which you are looking for is rented");
      } else {
        console.log(`The vehicle which you rented is  ${this.make} ${this.model} ${this.year}`);
        this.rented = true;
      }
    }
  
    return(): void {
      if (this.rented) {
        console.log(`The returned vehicle is ${this.make} ${this.model} ${this.year}`);
        this.rented = false;
      } else {
        console.log("This vehicle is avialable for rent");
      }
    }
  }
  
  class Car extends Vehicle {
    private price: number;
  
    constructor(make: string, model: string, year: number, price: number) {
      super(make, model, year);
      this.price = price;
    }
  
    rentalRate(): number {
   
      return 500;
    }
  
    get CarPrice(): number {
      return this.price;
    }
  }
  
  class Truck extends Vehicle {
    private truckSize: string;
  
    constructor(make: string, model: string, year: number, truckSize: string) {
      super(make, model, year);
      this.truckSize =truckSize ;
    }
  
    rentalRate(): number {
      
      return 50000;
    }
  
    get TruckSize(): string {
      return this.truckSize;
    }
  }
  
  class Motorcycle extends Vehicle {
    private bikeType: string;
  
    constructor(make: string, model: string, year: number, bikeType: string) {
      super(make, model, year);
      this.bikeType = bikeType;
    }
  
    rentalRate(): number {
      return 30;
    }
    get BikeType(): string {
      return this.bikeType;
    }
  }
  // result by  giving requird input
  const car = new Car("Toyota","Fortuner", 2023, 15000000);
  car.rent();
  car.rent();
  car.return();
  
  const truck = new Truck("Hino", "L6", 2023, "large");
  truck.rent();
  truck.return();
  
  const motorcycle = new Motorcycle("yamaha", "Royal Enfield 350", 2023, "electric");
  motorcycle.rent();
  motorcycle.return();
