const user = {
username: "baman",
price: 999,

welcomemessage: function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
}
}
// user.welcomemessage()
// user.username = "sharma",
// user.welcomemessage()
// console.log(this);

// function chai(){
//     let username = "baman"
//     console.log(this.username);   
// }

// const chai = function () {
//     let username = "baman"
//     console.log(this.username);   
// }

// const chai = () => {
//     let username = "baman"
//     console.log(this);   
// }
// chai()

// const addTwo = (num1, num2) => {
// return num1 + num2
// }
// const addTwo = (num1, num2) =>  ( num1 + num2 ) 
// const addTwo = (num1, num2) =>  ({username: "baman"})


// console.log(addTwo(3, 4))

 const myArray = [1, 2, 3, 4]
 myArray.forEach((num) => {
  console.log(num)
})