//  constructor make singleton
// Object.create

// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc",
tinderuser.name = "rammy"
tinderuser.isloggedin = false,

// console.log(tinderuser);

const regularuser = {
    email: "b@gmail.com",
    fullname: {
        userfullname: {
            firstname: "baman",
            lastname: "Marara",
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);

// literals makes multiple object 

// const mysym = Symbol("Key1")
// const Jsuser = {
//     name: "Baman",
//     "full name": "Baman Marara",
//     Age: 25,
//     [mysym]: "mykey1",
//     Location: "Pathankot",
//     email: "baman@google.com",
//     isloggedin: false,
//     lastlogindays: ["monday", "satuarday"],
// }
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["name"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mysym]);

Jsuser.email = "baman@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "baman@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello Js user");
}
// console.log(Jsuser.greeting());

Jsuser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}
// console.log(Jsuser.greetingTwo());

