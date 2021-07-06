var emp1 ={
    id:123,
    name:'Madhu',
    salary:707070
}

var emp2 = {};


for(var property in emp1){
    emp2[property] = emp1[property];
}

console.log(emp1);
console.log(emp2);

emp2.name = 'vivaan';

console.log(emp1);
console.log(emp2);
