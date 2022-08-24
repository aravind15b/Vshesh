"use strict";
let name = {
    name:"test",
    roll_no:123,
} 
let obj;
let i;
for ( obj in name){
    console.log(name[obj]);

}
let asd = ['test',"demo","dem02"];
for(i of asd){
     console.log(i);
}
for (let j=0;j<5;j++){
    console.log(j);
}
for (i=0;i<=100;i++){
    if(i%2==0){
        console.log("even" + i);
    }
}
let test = 38;
let ternary = test%2==0 ? console.log("even"): console.log("odd");
                    //condition                //true              //false