

const gangmin = {
    firstName: 'Gangmin',
    lastName: 'Kim',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(gangmin);
console.log(gangmin.getFullName());

const amy = {
    firstName: 'amy',
    lastName: 'Kim',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(amy);
console.log(amy.getFullName());


const mark = {
    firstName: 'mark',
    lastName: 'Kim',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(mark);
console.log(mark.getFullName());


function User(first, last){
    this.firstName= first;
    this.lastName = last;
}
User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
const userOne = new User('Gangmin', 'Kim');
const userTwo = new User('amy', 'Kim');
const userThree = new User('Mark', 'Kim');
console.log(userOne.getFullName());
console.log(userTwo);
console.log(userThree);