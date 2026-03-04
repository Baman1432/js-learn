//  constructor make singleton
// Object.create

const tinderuser = new Object();

tinderuser.id = "123abc";
tinderuser.name = "rammy";
tinderuser.isloggedin = false;

// console.log(tinderuser);

const regularuser = {
    email: "b@gmail.com",
    fullname: {
        userfullname: {
            firstname: "baman",
            lastname: "Marara",
        }
    }
};

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: "1",
        emial: "b1@gamil.com",
    },
    {
        id: "2",
        emial: "b2@gamil.com",
    },
    {
        id: "3",
        emial: "b3@gamil.com",
    }
]
// console.log(users[1].id)
// console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


// console.log(tinderuser.hasOwnProperty(`isloggedin`));



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

// Jsuser.email = "baman@chatgpt.com"
// Object.freeze(Jsuser)
// Jsuser.email = "baman@microsoft.com"
// console.log(Jsuser);

// Jsuser.greeting = function(){
//     console.log("hello Js user");
// }
// // console.log(Jsuser.greeting());

// Jsuser.greetingTwo = function(){
//     console.log(`hello Js user, ${this.name}`);
// }
// // console.log(Jsuser.greetingTwo());

