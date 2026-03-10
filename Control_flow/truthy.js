
// const userEmail = "b@Baman.ai"
//  if (userEmail) {
//     console.log("Got User Email");
    
//  }else{
//     console.log("Dont have User Email");
//  }
// const userEmail = ""
//  if (userEmail) {
//     console.log("Got User Email");
    
//  }else{
//     console.log("Dont have User Email");
//  }

//  falsey value

//  0, -0, "", false, BigInt 0n, Null, Undefined, NaN

// truthy value

// "0", "false", ` `, [], {}, function () {}, 

// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("Array is Empty");
    
// }
// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty");
    
// }
//  Nullish Coalescing  operators (??): Null Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? 25 ?? 10
// val1 = undefined ?? 15


// console.log(val1);

//   Terniary Operators

// Condition ? True : false

// const IceTeaPrice = 100
// IceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

//  Exercise //

// function getPercentage (obtainMarks, totalMarks){
//     let Percentage = obtainMarks/totalMarks * 100
//     return Percentage
// }
// // console.log(getPercentage(450, 600),"%" );

// const getGrade = (value)  => {
//     let result = "";
//     if (value <= 100 && value >= 90) {
//         result = "S";  
//     }
//     else if(value < 90  && value >= 80) {
//         result = "A+";   
//     }
//     else if(value < 80  && value >= 70){
//         result=  "A";   
//     }
//     else if(value < 70  && value >= 65){
//         result =  "B";   
//     }
//     else if(value < 65  && value >= 60){
//         result = "C";   
//     }
//     else if(value < 60  && value >= 55){
//        result = "D";   
//     }
//     else if(value < 55  && value >= 50){
//         result = "E";   
//     }
//     else if(value < 50 ){
//         result = "F";   
//     }

//     return result;
// };

// // getGrade(99);
// // getGrade(89);
// // getGrade(79);
// // getGrade(69);
// // getGrade(59);
// // getGrade(49);

// const student1 = {
//     Math: 75,
//     English: 85,
//     punjabi: 95
// }

// const student2 = {
//     Math: 74,
//     English: 84,
//     punjabi: 94
// }

// const student3 = {
//     Math: 76,
//     English: 86,
//     punjabi: 96
// }
// const totalMarks = 300;

// const student1Marks = student1.Math + student1.English + student1.punjabi;
// const student2Marks = student2.Math + student2.English + student2.punjabi;
// const student3Marks = student3.Math + student3.English + student3.punjabi;

// console.log('student 1 Result:', 
//     getPercentage(student1Marks, totalMarks), 
//     getGrade(getPercentage(student1Marks, totalMarks)));
    
// console.log('student 2 Result:', 
//     getPercentage(student2Marks, totalMarks), 
//     getGrade(getPercentage(student2Marks, totalMarks)));

// console.log('student 3 Result:', 
//     getPercentage(student3Marks, totalMarks), 
//     getGrade(getPercentage(student3Marks, totalMarks)));

