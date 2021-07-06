//getter example
var emp = {
    name:"Jack",
    Salary:606060,
    city:"Banglore",
    get empCity (){
        return this.city;
    },
    get empName(){
        return this.name;
    }
};

console.log(emp.empCity);
console.log(emp.empName);