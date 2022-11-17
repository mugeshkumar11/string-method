//char at

var char = "hello world"
console.log(char.charAt(3));

//concat

var con1 = "car auto";
var con2 = "mugeshkumar";

console.log(con2.concat(con1));

//index of

var index = "lets find the world"

console.log(index.indexOf("world"));

//last index of

var last = "a dev knowns a dev"
console.log(last.lastIndexOf("knowns"));

//replace

var replace = "hello good";
console.log(replace.replace("good", "day"));

//search

var sear = "have a good "
console.log(sear.search("a"));

//slice

var sli = "use to slice method"
console.log(sli.slice(2,9));

//substr
var sub = "html css js"
console.log(sub.substring(0,7));

//to upper case

var upper = "string methods"

console.log(upper.toUpperCase());

//to lower case
var lower = "JAVASCRIPT"
console.log(lower.toLowerCase());

//value of

var value = "asdfghjkqwertyui"
console.log(value.valueOf());

//trim

var tri = "    hello world hiiii   "
console.log(tri.trim());

//to string

var tostr = 15;

console.log(tostr.toString());

//includes

var inc = "hi hello how are you"

console.log(inc.includes("hello"));

//charcode at

var charcode = "TEST"
console.log(charcode.charCodeAt(0));

//MATCH 
var mat = "goodday goodday goodday goodday"
console.log(mat.match(/day/g));

//split

var spli = "1,3,6,5,7,8,3,2,4,6,8"
console.log(spli.split(","));

//length

var leng = "asdfghjqwertyuioasdfghj"
console.log(leng.length);

//locale compare

let text1 = "ab";
let text2 = "cd";
  console.log( text1.localeCompare(text2)); 