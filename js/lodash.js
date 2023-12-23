import _ from 'lodash';

const usersA = [
    {userId: '1', name: 'John'},
    {userId: '2', name: 'Neo'}
]
const usersB = [
    {userId: '1', name: 'John'},
    {userId: '3', name: 'Amy'}
]

const usersC = usersA.concat(usersB);
console.log('usersA', usersA);
console.log('usersB', usersB);
console.log('usersC', usersC);

// 중복 없애기
console.log('uniqBy', _.uniqBy(usersC, 'userId'));

// 중복 없이 데이터 합치기
const usersD = _.unionBy(usersA, usersB, 'userId');
console.log('unionBy', usersD);


const users = [
    {userId: '1', name: 'HEROPY'},
    {userId: '2', name: '임의의 문자열1'},
    {userId: '3', name: '임의의 문자열2'},
    {userId: '4', name: 'John'},
    {userId: '5', name: 'Amy'},
]

/**
 * find(찾을 내용을 포함한 객체, 찾을 기준)
 */
const foundUser = _.find(users, {name: 'Amy'})
const foundUserIndex = _.findIndex(users, {name: 'Amy'});

console.log(foundUser);
console.log(foundUserIndex);

_.remove(users, {name: 'HEROPY'});
console.log(users);
