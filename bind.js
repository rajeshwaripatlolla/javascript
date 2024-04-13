const obj1 = {
    name:"mahi",
    city:"sangareddy"
}
function newfun(){
    // console.log(this.name,this.city); 
    this.name="suvarna"
    this.city="hyd"
    console.log(this.name , this.city);
};
newfun.call(obj1)