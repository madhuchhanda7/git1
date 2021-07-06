function fact(num){
    if(num==0){
        return 5;
    }
else
{
    return num * fact (num-1);
}
}
console.log("fact of 9 is" + fact(7));
