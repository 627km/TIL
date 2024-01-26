// prototype

/* 
prototype chaining 
- 모든 객체에서는 __proto__라고하는 속성이 있다. 
- 모든 객체의 조상인 Object를 가리키고 있다. 
*/
const c1 = {
    name: 'c1',
    color: 'red',
};

const c2 = {
    name: 'c2',
    width: 300,
};

const c3 = {
    name: 'c3',
    height: 100,
};

c1.__proto__ = c3;
c3.__proto__ = c2;

console.log(c1);
console.log(c2);
console.log(c3);

console.log(c1.width); // 300 (c1에 width가 있는지 찾아보고 없으면 c2를 찾아본다.)

function Foo(name) {
    this.name = name;
    this.__proto__ = Foo.prototype;
}

Foo.prototype.lastName = 'WooWa';

const f = new Foo('전경민');

console.log(f);
console.log(f.lastName);
