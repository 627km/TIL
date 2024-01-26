// context (문맥)
// 1. execution context
// 2. lexical context

const person = {
    name: 'Jeon kyung min',
    age: 27,
    getAge() {
        return this.age;
    },
};

person.age;
person.getAge();

const age = person.getAge;

// age();

age.call(person);

// execution context : 실행 컨텍스트
// 실행하는 순간 결정 -> 따라서 age()를 호출하는 맥락상 소유자확인이 안되므로 this.age = undefined가 된다.

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.getAge = this.getAge.bind(this);
    }

    getAge() {
        return this.age;
    }

    // lexical context : 어휘 컨텍스트
    // arrow function 시용
    getName = () => this.name;
}

const p1 = new Person('Jeon', 26);

p1.getAge();

const myAge = p1.getAge;

myAge.call(p1);

p1.getName();

const x = p1.getName;
x();
