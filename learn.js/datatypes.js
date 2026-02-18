//  Primitive

// 7 types : String,Number,null,boolean,undefined,symbol,BigInt;

const Score = 100
const scorevalue =100.3

const IsloggedIn = false
const outsideTemp = null
const UserEmail = undefined;



// console.log(typeof outsideTemp);

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const BigNumber = 2116544321653n

// console.log(typeof BigNumber);



// Reference (Non Primitive) : (Arrays,Objects,Functions);

const Heros = ["Spiderman","Ironman","Hulk"]
let myObj = {
    name: "Baman", 
    age: 25,
}
const MyFunction = function(){
    console.log("Hello World");
    
}
// console.log(typeof Heros, myObj, MyFunction);

// Stack(Primitive) , Heap(NoN-Primitive)

let myyoutubename = "bamanmarara"
 let anothername = myyoutubename

 anothername = "sharmamarara"

 console.log(myyoutubename);
 console.log(anothername);

 let userone = {
    email: "user@google.com",
    upi: "user@ybl",
 }
 let usertwo = userone
 usertwo.email = "baman@google.com"

 console.log(userone);
 console.log(usertwo);
 