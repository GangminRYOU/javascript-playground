//IIFE
const a = 7;
function double(){
    console.log(a * 2);
}

double();

//즉시 실행함수
(function(){
    console.log(a * 2);
})();
(function(){
    console.log(a * 2);
}());
