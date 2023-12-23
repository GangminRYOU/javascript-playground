//this

/**
 * 일반 함수는 호출위치에 따라 this정의!
 * 람다는 자신이 선언된 함수 범위에서 this정의!
 */

const OOP = {
    name: 'Gangmin',
    normal: function() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
}

OOP.normal();
OOP.arrow();

const amy = {
    name: 'Amy',
    normal: OOP.normal,
    arrow: OOP.arrow
}

amy.normal();
amy.arrow();

function User(name) {
    this.name = name;
}


User.prototype.normal = function() {
    console.log(this.name);
}

User.prototype.arrow = () => {
    console.log(this.name);
}

const gangmin = new User('Wow');

gangmin.normal();
gangmin.arrow();


const timerOne = {
    name: 'Time!!!',
    timeout: function() {
        //setTimeout(함수, 시간);
        setTimeout(function () {
            console.log(this.name);
            //undefined가 나온다.
        }, 2000);
    }
}
timerOne.timeout();

const timerTwo = {
    name: 'Time!!!',
    timeout: function() {
        //setTimeout(함수, 시간);
        setTimeout(()=> {
            console.log(this.name);
        });
    }
}
timerTwo.timeout();