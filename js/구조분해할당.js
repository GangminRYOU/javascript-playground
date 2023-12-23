const user = {
    name: 'John',
    age: 36,
    email: 'john@example.com',
    address: 'USA'
}
/**
 * 이렇게 기본값을 지정해줄 수도 있다.
 * address가 근데 이미 정의되어 있다면, 정의된 값을 따라감
 */
const {name: john, age, email, address = 'Korea'} = user;

/**
 * 이것처럼 name: john에서 처럼 변수이름을 미리 정의해줄수도 있다.
 * let john = name;과 같은 코드
 */

console.log(`사용자의 이름은 ${john}입니다.`);
console.log(`${john}의 나이는 ${age}세 입니다.`)
console.log(`${john}의 이메일 주소는 ${email}입니다.`);
//console.log(address);

/**
 * 배열의 구조분해 할당
 */

const fruits = ['Apple', 'Banana', 'Cherry'];
/**
 * 배열의 경우 객체와 달리 [ ] 배열 기호를 통해 값을 할당 해야한다.
 */
const [a, b, c, d] = fruits;

console.log(a, b, c, d);


//fruits에서 Banana만 추출하고 싶은 경우
const [, banana] = fruits;
/**
 * 배열 구조분해는 순서를 명확히 지켜줘야하기 때문에 필요없는 인덱스라도 ,로 순서를 명시해주어야한다.
 */
console.log(banana);