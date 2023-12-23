// var는 block 레벨이 아닌 함수레벨로 범위가 동작한다.

function scope(){
    console.log(a);
    if(true) {
        //const a = 123
        var a = 123;
        //console.log(a);
    }
    // console.log(a);
}

scope();