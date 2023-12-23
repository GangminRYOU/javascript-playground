function sum(x, y) {
    console.log(x + y);
}

sum(1, 3)
sum(4, 12)

function sumTwo(x, y) {
    return (x + y);
}

const a = sumTwo(1, 3);
const b = sumTwo(4, 12);
console.log(a);
console.log(b);
console.log(a + b);

//익명함수
const sumBr = function(x, y) { x - y}
const help = (z, w) => {z % w}


function helloArg(){
    console.log(arguments);
    return;
}


console.log(helloArg(1,2,3,4,5,6,7,8,9,10,11));