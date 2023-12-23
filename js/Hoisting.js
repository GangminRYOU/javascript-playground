const a = 7;
//Hoisting : 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

double();

// const double = function(){
//     console.log(a * 2);
// };

function double(){
    console.log(a * 2);
};

// double();


