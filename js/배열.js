const numbers = [1,2,3,4];
const fruits = ['Applie', 'Banana', 'Cherry'];

console.log(numbers[1]);
console.log(fruits[2]);

const found = numbers.find(element => element >= 10);
const length = fruits.length;
console.log(length);
console.log([1,2].length);

//빈 배열 - 0
console.log([].length);


//concat - 원본 데이터를 손상시키지 않음
const newArrary = numbers.concat(fruits);
console.log(newArrary);
console.log(numbers);
console.log(fruits);

//.forEach();
fruits.forEach(function (fruit, index, array){
    console.log(fruit, index, array);
});

fruits.forEach(function (fruit, i){
    console.log(fruit, i);
});


//.map();

const objects = [{
    field1: 'value',
    field2: 3
}, {
    field1: 4,
    field2: 3.14
}, {
    field1: 'try',
    field2: 3.14
}, {
    field1: 'hard',
    field2: 3.14
}, {
    field1: 4,
    field2: 3.1,
    newjeans: 'Hanni'
}, {
    field1: 4,
    field2: 3.18,
    laufey: 'Elegant'
}];

const a = objects.forEach((item, i) => {
    console.log(`${item} - ${i}`);
});

console.log(a);

const b = objects.map(function (item, i){
    return `${item}-${i}`;
});

console.log(b);

const c = objects.map(function (item, i){
    return {
        id: i,
        name: item.field1
    };
});

console.log(c);

const d = objects.map((item, i) => ({id: i, name: item.field2}));

console.log(d);