const numbers = [1,2,3,4];
const fruits = ['Apple', 'Orange', 'Banana'];

/* const a = numbers.map(number => {
    return number < 3;
}); */

const a = numbers.map(number => number < 3);

console.log(a);

const b = numbers.filter(number => {
    return number < 3
});

console.log(b);


//둘다 원본 데이터는 훼손하지 않는다.
console.log(numbers);

// .find() .findIndex();

const resultC = fruits.find(fruit => /^B/.test(fruit))

console.log(resultC);
//Banana
const resultD = fruits.find(fruit => /^C/.test(fruit))
console.log(resultD);
/**
 * find()는 찾으면 반복이 멈춘다.
 */


//findIndex
const resultE = fruits.findIndex(fruit => /^C/.test(fruit))

console.log(resultE);


//includes
const resultK = numbers.includes(3);
console.log(resultK);

const resultJ = fruits.includes('Gangmin');
console.log(resultJ);

//.push(), .unshift()
//원본이 수정되는 함수 주의!!!!!

/**
 * 가장 뒤에 값을 넣는 함수
 */
numbers.push(5)
console.log(numbers);

/**
 * 배열 데이터의 가장 앞쪽에 데이터를 삽입하는 형태
 */
numbers.unshift(0);
console.log(numbers);

/**
 * .reverse()
 * 원본 수정됨 주의
 */


numbers.reverse()
console.log(fruits);

fruits.reverse()
console.log('reverse : ' + numbers);
console.log('reverse : ' + fruits);


/**
 * .splice()
 * 원본 수정됨 주의!!!
 */


numbers.splice(2,1);

/**
 * .splice(배열 데이터의 index 값, index번호에서 지울 원소 갯수)
 */

console.log('splice : ' + numbers);
numbers.splice(2,2);
console.log('splice : ' + numbers);

numbers.splice(2,0);
console.log('splice : ' + numbers);

/**
 * .splice(배열 데이터의 index 값, index번호에서 지울 원소 갯수, 새로 추가할 아이템)
 */

//index에서 n개의 item을 지우고, item n을 추가해라

numbers.splice(2,0, 999);
console.log('splice : ' + numbers);


numbers.splice(2, 1, 99);
console.log('splice : ' + numbers);

fruits.splice(2, 0, 'xxx');

console.log('fruits: ' + fruits);

