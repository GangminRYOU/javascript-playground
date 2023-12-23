const double = function(x, y) {
    return x * y;
}

console.log(double(1, 2));

const doubleArrow = (x, y) => x * y;

console.log(doubleArrow(1, 2));

//javascript에서 객체는 {}를 사용해서 표현한다. 하지만, 람다식도 {}로 표현
//따라서 객체를 return하는 람다식은 아래와 같이 표현해줘야한다.

const returnObject = () => ({
    name: 'gangmin'
})

