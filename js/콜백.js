function timeout(){
    setTimeout(() => {
        console.log('Callback')
    }, 3000)
}

timeout();

console.log('Done');
// 이렇게 되면, Done -> Callback 형태로 출력된다.

function callback(fun){
    setTimeout(() => {
        console.log('Callback Applied');
        fun();
    }, 500);

}


callback(() => {
    console.log('Callback Applied Done!');
});