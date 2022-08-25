/** @format */

//Primitive types

//string

var word = "hello world";
console.log(word);

//number
var number_1 = 123.333;
var number_2 = 333;
var sum = number_1 + number_2;
console.log(sum);

//boolen

var test = true;
var test_1 = false;
console.log(test, test_1);

//undefined
var demo;
console.log(demo);

//Reference types

//Object

var obj = {
  name: "john",
  roll_no: 23,
};

console.log(obj);
//Reading value of object
// obj.keyvalue

var de = obj.name;
console.log(de);

//Reassging value to an object

var obj = {
  name: "john",
  roll_no: 23,
};

obj.name = "adam";

console.log(obj);

//Adding a new key

var obj = {
  name: "john",
  roll_no: 23,
};
obj.blood_group = "O +ve";
console.log(obj);

//Deleting a key
var obj = {
  name: "john",
  roll_no: 23,
};

//delete name of object.nameofkey
delete obj.name;
console.log(obj);

//Array
var arr = ["test", "123", "+o ve"];
//0    //1     //2
//Reading a value of array

var arr5 = arr[1];
console.log(arr5);

//Inserting a new value

arr.push("a+ ve"); //insert last place
arr.unshift("93%"); //insert first place
console.log(arr);

//delete from arr

arr.pop(); //delete last place
console.log(arr);
arr.shift(); //delete from first place
console.log(arr);

//edit array
//splice

console.log(arr);
arr.splice(2, 1, "a +ve", "b +ve", "o -ve");
console.log(arr);

//function
//Rules
//should start small letter
//should start have not captial
//keyoword of function small letter
//no special symbols should give for the function
function test() {
  var number_1 = 3;
  var number_2 = 5;
  var number_3 = number_1 + number_2;
  console.log(number_3);
}
test(); //executes this only this writtern like this
