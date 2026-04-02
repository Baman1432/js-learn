// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log(`5 is the best number`);
        
    }
//    console.log(element);
    
}

for (let i = 1; i <= 20; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j}`);
        // console.log(i + `*` + j + `=` + i*j);
        
    }
    
}
let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//          break
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`detected 5`);
         continue
    }
    // console.log(`value of i is ${index}`);
    
}

// while and do while

let index = 0
while (index <= 10) {
    // console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray1 = ["Flash", "batman", "superman"]

let arr = 0
while (arr <  myArray1.length) {
    // console.log(`value is ${myArray1[arr]}`);
    arr = arr + 1
}

// do while loop

let score = 1
do {
    // console.log(`score is ${score}`);
    score++

} while (score <= 10);

// for of loop

["", "", ""]
[{}, {}, {}]


const arr1 = [1, 2, 3, 4, 5]

for (const num of  arr1) {
    // console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
     
}

//  Maps

// const map = new Map()
// map.set(`IN`, "India")
// map.set(`usa`, "united states of america")
// map.set(`FR`, "France")
// console.log(map);
// for (const [key, value] of map) {
    // console.log(key, `:-`, value);
    
// }

// const myObject = {
//     Game1: 'nfs',
//     Game2: 'spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, `:-`, value);
    
// }

// const myObject = {
//     js: "javascript",
//     cpp: "c++",
//     Rb: "Ruby",
//     Swift: "swift by apple"
// }
// for (const key in myObject) {
//     // console.log(myObject[key]);
//     console.log(`${key} shortcut for ${myObject[key]}`);
    
    
// }

const programming = ["js", "ruby", "java", "cpp"]

for (const key in programming) {
//    console.log(programming[key]);
   
}

// const map = new Map()
// map.set(`IN`, "India")
// map.set(`usa`, "united states of america")
// map.set(`FR`, "France")

// for (const key in map) {
//    console.log(key);
   
// }

// for each loop

const coding =  ["js", "ruby", "java", "cpp"]

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

const mycodding = [
    {
    languagename: "javascript",
    languagefile: "js",
    },
    {
    languagename: "java",
    languagefile: "java"
    },
    {
    languagename: "python",
    languagefile: "Py",
    }
]
mycodding.forEach( (item) => {
    // console.log(item.languagefile);
    // console.log(item.languagename);
    console.log(item);
    
    
}
)