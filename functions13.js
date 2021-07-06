//The following variables are
//defined in the global scope
var num1 = 20,
    num2 = 3,
    name = 'ms Dhoni';

    //Below function is defined in the global scope
    function multiply(){
        return num1*num2;
    }
    
    console.log(multiply());

    //nested function example
    function getscore(){
        var num1 =2,
        num2 =3;


        function add(){
            return name +'scored'+(num1+num2);
        }
    
        return add();
    }

    console.log(getscore());