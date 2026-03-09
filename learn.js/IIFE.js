// Immediately Invoked Functions EXPRESSIONS 

(function chai(){
    // Named IIFE
    console.log(`Db Connected`);
})();

((name) => {
    // Simple IIFE
console.log(`Db Connected Two ${name}`);
} )(`Baman`)