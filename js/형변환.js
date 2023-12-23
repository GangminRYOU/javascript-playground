const a = 1;
const b = '1';

console.log(a === b);

// == -> 동등연산자 : 형변환을 일으켜서 비교한다.
console.log(a == b);
// 하지만, 안 쓰는 것을 권장


if(true){
    console.log(123);
}
if('false'){
    console.log(123);
}

if(0){
    console.log(123);
}

if(null){
    console.log(123);
}


if(''){
    console.log(123);
}
//NaN
if(1 + undefined){
    console.log(123);
}