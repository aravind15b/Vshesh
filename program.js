//Primitive types


//string
var word = "this is a string";

console.log(word);

//number
var number_1 =  123;
var number_2 =  333;
var sum  = number_1 + number_2;
console.log (sum )

//boolen 
var test = true;
var test_1 = false;
console.log(test,test_1);

//undefined
var demo;
console.log(demo);

//Reference types

//Object 

var obj = {
    name : "john",
    roll_no:23,
}
console.log(obj);

//Reading value of object
console.log(obj.name);

//Reassging value to an object

obj.name = "adam";
console.log(obj);

//Adding a new key

obj.blood_group = "O +ve";

console.log(obj);

//Deleting a key

delete obj.blood_group;
console.log(obj);

//Array
var arr_string = ["test","demo"];
var arr_number  = [1,2,3];
var arr_mixed = [1,"string",[1,2],{name:"tom",test_mark:90,}]

console.log("This a  array number   " + arr_string );
console.log("This a  array string  " + arr_number );
console.log("This a  array mixed   " + arr_mixed);
