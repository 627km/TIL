// 함수 정의문
// 함수 (기본적인 형태)
function myFn(x) {
    return x + 100;
}

const result = myFn(10);

// 함수식
// 이름이 없는 함수(익명함수) -> 함수를 변수에 넣어서 값으로 취급해서 사용한다
const myFnV2 = function () {
    return 100;
};

myFnV2();

// 즉시 실행 함수 (함수가 만들어지자 마자 즉시 한번 실행)
// 실행 중 단 한번만 실행
(function () {
    console.log("즉시 실행 함수 실행!");
})();

// 가변 인자 처리
// 1) 이렇게 하면 함수 시그니처만 보고 함수의 정보를 알기 힘들다
function sum() {
    // 인자를 써주지 않아도 arguments를 통해 넘겨진다.
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
        s = s + arguments[i]; // arguments : 호출당시 넘겨받은 인자들이 들어있다.
    }
    return s;
}

const abcSum = sum(10, 20, 30);

console.log(abcSum);

// 2) 전개 파라미터 (rest parameter)
function sum2(...args) {
    // ...은 몇개가 올지 모른다는 뜻과 유사
    let s = 0;
    for (let i = 0; i < args.length; i++) {
        s = s + args[i];
    }
    return s;
}

const sum2Result = sum2(10, 20, 30, 40, 50);

// 함수를 호출하는 방법 : call & apply
const arr = [10, 20, 30, 40, 50];
myFnV2();
sum.call(null, 10, 20, 30);
sum.apply(null, arr); // 인자값을 외부에서 받아오므로 유연하게 변화시킬 수 있다.

// 화살표 함수 (arrow function)
// 이름이 기본적으로 없음 -> 즉 변수에 담아줘야 사용할 수 있다.
const sumV2 = (a, b, ...args) => {
    let s = 0;
    for (let i = 0; args.length; i++) {
        s = s + args[i];
    }
    return s;
};

const ten1 = () => 100; // 가장 짧은 기본적인 화살표 함수형태
const ten2 = (x) => 100 + x;
const ten3 = (x, y) => 100 + x + y;

// 생성기 함수 (generator function)
function* gen() {
    // yield : 값을 밖으로 내보낼 수 있는 제너레이터 함수 만의 기능
    yield 10;
    yield 20;
    return 30;
}

const g = gen();

g.next(); // generator 함수와 커뮤니케이션을 할 수 있는 메소드
g.next();
g.next();

// 비동기 함수 (asynchronous function)
async function myTask() {}
