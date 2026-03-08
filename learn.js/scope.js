let a = 10
// const b = 20
// var c = 30

// var c = 300

if (true){
let a = 10
const b = 20
// var c = 30
// console.log("Inner: ", a, b);

}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "baman"

    function two(){
        const website = "youtube"
        // console.log(username);   
    }
    // console.log(website);

    two()
}
one()

if(true){
    const username ="baman"

    if(username){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++++++ Intersting++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1

}

 addtwo(2)
const addtwo = function(num){
    return num + 2
}
// console.log(addtwo(5));