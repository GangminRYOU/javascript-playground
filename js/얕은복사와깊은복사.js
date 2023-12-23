import _ from 'lodash';

const user = {
    name: 'Heropy',
    age: 85,
    emails: ['dbrkdals1994@gmail.com']
}


const copyUser = user;
console.log(copyUser, user, copyUser === user);

user.age = 22;
console.log(copyUser, user);
const deepCopyUser = Object.assign({}, user);
user.age = 36;
console.log(user, deepCopyUser, user === deepCopyUser);
let spreadCopy = {...user};
console.log(user, spreadCopy, user === spreadCopy);




console.log('------------------------')
console.log('------------------------');

/**
 * 우리는 객체를 복사했지, 내부의 배열까지 복사한적은 없다.
 * 따라서, 같은 메모리 주소를 공유하게 됨
 */
user.emails.push('ygm1994@naver.com')
console.log(user.emails === spreadCopy.emails);
//true
console.log(user);
console.log(spreadCopy);


/**
 * lodash
 * 깊은 복제를 할 수 있다.
 */

const lodashUser = _.cloneDeep(user);
console.log(user, lodashUser, user === lodashUser);
user.age = 99;
console.log(user, lodashUser);
console.log('---------------')

user.emails.push('neo@zililnks.com');
console.log(user.emails === lodashUser.emails);
console.log('user', user);

console.log('copyUser', lodashUser)