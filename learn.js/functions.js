// // console.log("b");
// // console.log("a");
// // console.log("m");
// // console.log("a");
// // console.log("n");

// // function saymyname(){
// // console.log("b");
// // console.log("a");
// // console.log("m");
// // console.log("a");
// // console.log("n");
// // }
// // saymyname()

// // function addtwonumber(number1, number2){

// //     console.log(number1 + number2); 
// // }
// function addtwonumber(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }
// const result = addtwonumber(3, 4)
// // addtwonumber(3, "4")
// // addtwonumber(3, "a")
// // addtwonumber(3, null)
// //  console.log("result: ", result);
 
// function loginusermessage(username = "am"){
//     // if(username === undefined)
//     if(!username){
//     //  console.log("Please enter a username");
//     return
//     }
//     return `${username} just logged in`
// }
// // console.log(loginusermessage("baman"));
// //  console.log(loginusermessage("baman"));

// function addcalculatecardprice(val1, val2, ...num1){
// return num1
// }
// // console.log(addcalculatecardprice(200, 300, 400, 500));

// const user = {
//     username: "baman",
//     price: 199,
// }
// function handleObject(anyObject){
// // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
// return
// }
// // handleObject(user)
// handleObject({
//     username: "sharma",
//     price: 399
// })

// const mynewarray = [200, 400, 500, 600]
// function reṭurnsecondvalue(getArray, inx){
//     return getArray[inx]
// }
// console.log(reṭurnsecondvalue(mynewarray, 3));

// // console.log(reṭurnsecondvalue([200, 400, 500, 600]));

//exercise  write a method which takes a parameter of arr and  inx return element
//  function getValueByIndex(arr, index){
//     return arr[index]; 
// }

// const arr1 = [100, 200, 300, 400]
// const arr2 = ['Swift', 'Alto', 'Zen'];
// const element1 = getValueByIndex(arr1, 2);
// const element2 = getValueByIndex(arr2,2);
// console.log(element1);
// console.log(element2);

// write a method which take paramater  of obj and key of obj and return the value;

function getValueByKey(obj, key){
 return obj[key];
}
const user = {
    username: "Baman",
    age: 25,
}
console.log(getValueByKey(user, "username"));

// function getValue(obj, key) {
//   return obj[key];
// }
// const user = { 
//     name: "Rahul", 
//     age: 25 
// };

// console.log(getValue(user, "name")); 
// console.log(getValue(user, "age")); 