const userAge = {
    name: 'Gangmin',
    age: 85
}

const userEmail = {
    name: 'Gangmin',
    email: 'dbrkdals1994@gmail.com'
}

const target = Object.assign(userAge, userEmail);
const targetTwo = Object.assign({}, userAge, userEmail);

console.log('target : ' + target);
console.log('userAge : ' + userAge);
console.log('userEmail : ' + userEmail);
console.log('targetTwo : ' + targetTwo);
console.log('target : ' + target === userAge);

const a = {k: 123}
const b = {k: 123}
console.log(a===b);


const user = {
    name: 'Gangmin',
    age: 85,
    email: 'dbrkdals1994@gmail.com'
}

const keys = Object.keys(user);
console.log(keys);
console.log(user['email']);


const values = keys.map(key => user[key]);
console.log(values);