/**
 * 원시데이터: String, Number, Boolean, undefined, null
 * 참조형 데이터: Object, Array, Function
 */


let a = 1;
let b = 4;
console.log(a, b, a === b);
//a와 b가 값이 아닌 바라보는 메모리의 주소가 다르기 때문에, false

/**
 * a가 바라보고 있던 a의 주소를 b에 할당한다.
 */
b = a;

console.log(a, b , a === b);

/**
 * 숫자 데이터 7은 3번쨰 메모리 주소를 바라보게 된다.
 */
a = 7;
console.log(a, b , a === b);

let c = 1;
console.log(b, c, b === c);

/**
 * 참조형 데이터의 불변성
 */

let jason = {k:1};
let colibali = {k:1};

console.log(jason, colibali, jason === colibali);
/**
 * 참조형 데이터는 원시 데이터와 다르게 새로운 데이터를 생성할떄마다 메모리 공간에 생성
 * 따라서 참조형 데이터는 불변성이 없다.
 */

jason.k = 7;
colibali = jason;
console.log(jason, colibali, jason === colibali);


jason.k = 2;

console.log(jason, colibali, jason === colibali);

let boldGaming = colibali;

console.log(jason, colibali, boldGaming, jason === boldGaming);
