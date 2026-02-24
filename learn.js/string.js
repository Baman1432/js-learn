const name = "Baman"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('baman-g-com')
console.log(gamename); 

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('m'));

const Newstring = gamename.substring(0, 4)
console.log(Newstring);

const anotherstring = gamename.slice(-6, 4)
console.log(anotherstring);

const Newstringone = ("    baman    ")
console.log(Newstringone);
console.log(Newstringone.trim());
console.log(Newstringone.trimEnd());
console.log(Newstringone.trimStart());

const url = "https://baman.com/baman%20marara"
console.log(url.replace('%20','-'));
console.log(url.includes("baman"));
console.log(url.includes("pipa"));

console.log(gamename.split('-'));
