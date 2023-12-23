import getType from "./getType";

console.log('Hello World!');
console.log(123);
let [apple, banana, orange] = [1, 2, 3];

console.log(apple);
console.log(banana);
console.log(orange);


console.log([apple, banana, orange]);

console.log(typeof 'Hello');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);

console.log(typeof null);
console.log(typeof {});

/* function getType(data){
    return Object.prototype.toString.call(data).slice(8, -1);
}; */

console.log(getType([1, 2, 3]));
console.log(getType(123));
console.log(getType(null));
console.log(getType({}));
console.log(getType([1, 2, 3]));

// 할당 연산자

const a = 2;
let b = 3;
console.log(a);
b = b + 1;
console.log(b);

//반복문
//for
//java script로 html에 요소 추가하기
const ulEl = document.querySelector('ul');
console.log(ulEl);
for(let i = 0; i < 10; i++){
    const li = document.createElement('li');
    li.textContent = `list-${i + 1}`;
    if((i + 1) % 2 === 0){
        li.addEventListener('click', () => {console.log(li.textContent)});
    }
  
    ulEl.appendChild(li);
}
