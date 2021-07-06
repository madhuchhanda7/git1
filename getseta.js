function Car(color,make){
    this.color = color;
    this.make = make;
}


var car1 = new Car('Blue' ,2021);
var car2 = new Car('White',2021);

console.log(car1);
console.log(car2);

console.log(car1.color);

console.log(car2["make"]);