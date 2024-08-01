const name = "Tony"

console.log(name + " Stark");
console.log(`${name} Stark`); //Stringinterpolation

const gamename = new String('Cricket') //efficient way to declare string

console.log(typeof gamename); //object
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));
console.log(gamename.substring(0 , 4)); //can pass negative values to .slice not .substring

const anothername = new String(" Tony Stark ")
console.log(anothername);
console.log(anothername.trim());











