"use strict";
class Vehicle {
    //TypeScript class hierarchy to model a vehicle rental system:
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    // getter
    get ForMake() {
        return this.make;
    }
    get ForModel() {
        return this.model;
    }
    get forYear() {
        return this.year;
    }
    get carRented() {
        return this.rented;
    }
    // setter
    set carRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            console.log("The vehicle which you are looking for is rented");
        }
        else {
            console.log(`The vehicle which you rented is  ${this.make} ${this.model} ${this.year}`);
            this.rented = true;
        }
    }
    return() {
        if (this.rented) {
            console.log(`The returned vehicle is ${this.make} ${this.model} ${this.year}`);
            this.rented = false;
        }
        else {
            console.log("This vehicle is avialable for rent");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, price) {
        super(make, model, year);
        this.price = price;
    }
    rentalRate() {
        return 500;
    }
    get CarPrice() {
        return this.price;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, truckSize) {
        super(make, model, year);
        this.truckSize = truckSize;
    }
    rentalRate() {
        return 50000;
    }
    get TruckSize() {
        return this.truckSize;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, bikeType) {
        super(make, model, year);
        this.bikeType = bikeType;
    }
    rentalRate() {
        return 30;
    }
    get BikeType() {
        return this.bikeType;
    }
}
// result by  giving requird input
const car = new Car("Toyota", "Fortuner", 2023, 15000000);
car.rent();
car.rent();
car.return();
const truck = new Truck("Hino", "L6", 2023, "large");
truck.rent();
truck.return();
const motorcycle = new Motorcycle("yamaha", "Royal Enfield 350", 2023, "electric");
motorcycle.rent();
motorcycle.return();
