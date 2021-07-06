function Employee(id,name,salary){
    if(new.target != undefined){
        this.id = id;
        this.name =name;
        this.salary =salary;
    } else
    console.log('please call only to create object');
}
var emp1 = new Employee (123,'vinay',147895623);


Employee();
Employee();
