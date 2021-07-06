function func(){

    const items = [25,65,35];
    const copy = [];

    items.forEach(function(item){
        copy.push(item + item +2)
});

console.log(copy);
}
func();