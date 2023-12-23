/**
 * prototype을 통해서 지정한 메소드는 메모리에 딱 한 번만 만들어지고,
 * 그것을 앞의 클래스의 생성자가 new라는 키워드로 만들어 내는 인스턴스에서 
 * 언제든지 활용할 수 있다. -> 즉 new String 으로 만들어낸 객체에 직접적으로
 * indexOf()를 사용할 수 있다.
 */

const resultOne = 'Hello, world'.indexOf('world');
//w의 index
const resultTwo = 'Hello, world'.indexOf('Gangmin');
//-1
console.log(resultOne);
console.log(resultTwo);

//String.prototype.indexOf()

const str = '0123';
console.log(str);
console.log(str.length);


const strTow = 'Hello world';
console.log(strTow.indexOf('Gangmin') !== -1);
console.log(strTow.slice(0, 3));
//'Hel' -> inclusive, exclusive

console.log(strTow.replace('world', 'gangmin'));
console.log(strTow.replace(' world', ''));

const strThree = 'dbrkdals1994@gmail.com';

console.log(strThree.match(/.+(?=@)/)[0]);

const name = '   chanhee   ';
console.log(str.trim())