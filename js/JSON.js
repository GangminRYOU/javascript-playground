import myData from '../json/myData.json'

console.log(myData);


const user = {
    name: 'HEROPY',
    age: 85,
    emails: [
        'creater@gmail.com',
        'noreply@gmail.com'
    ]
}

console.log(user);
//직렬화 api
const str = JSON.stringify(user);
console.log('str', str);
console.log(typeof str);
/**
 * JSON은 하나의 문자 데이터
 */
//npm -y
//역직렬화
const obj = JSON.parse(str);
console.log(obj);
