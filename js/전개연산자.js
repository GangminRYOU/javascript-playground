const fruits = ['apple', 'orange', 'banana', 'cherry'];
console.log(fruits);
/**
 * 전개 연산자
 */
console.log(...fruits);

function toObject(a, b, c) {
    return {a: a, b: b, c: c};
}

/**
 * 매개변수를 전개연산자로 받기
 */
const toObjectArrow = (a, b, ...c) => ({a, b, c})

console.log(toObject(...fruits));
console.log(toObjectArrow(...fruits));