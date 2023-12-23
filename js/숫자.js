const pi = 3.141592653589793
console.log(pi)

const str = pi.toFixed(2);
console.log(str)
console.log(typeof  str);

//전역함수
const integer = parseInt(str);
const float = parseFloat(str);

Math.abs(-12);
Math.min(2, 8);
Math.max(2, 8);
Math.ceil(3.14);
Math.floor(3.14);
Math.round(3.14);
Math.random();

export default function random(){
    return Math.floor(Math.random() * 10);
}