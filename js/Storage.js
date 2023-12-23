const user = {
    name: 'John',
    age: 36,
    emails: [
        'gng@example.com',
        'kat@example.com'
    ]
}

//localStorage.setItem('user', user)
const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON)
console.log(localStorage.getItem('user'));
const originalObject = JSON.parse(localStorage.getItem('user'));
console.log(originalObject);
const str = localStorage.getItem('user');
//덮어쓰기
originalObject.age = 22;
localStorage.setItem('user', JSON.stringify(originalObject));
console.log(originalObject);
//localStorage.removeItem('user');

/**
 * lowdb
 */

