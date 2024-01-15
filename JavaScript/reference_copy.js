// 복사는 기본형 값만 가능하다.
// 객체형은 참조가 가능하다.

// 복사
let a = 10;
let b = a; // a의 값을 b에 복사

b = 20;

console.log(`a = ${a}`);
console.log(`b = ${b}`);

console.log("-------------");
// 참조
let o = {
    isLoading: false,
};
let o2 = o; // 복사가 아니라 참조가 된다.

o2.isLoading = true; // o.isLoading도 true로 변한다.

console.log(`o.isLoading = ${o.isLoading}`);
console.log(`o2.isLoading = ${o2.isLoading}`);

function foo(o) {
    o.isLoading = false;
}

foo(o);

console.log(`o.isLoading = ${o.isLoading}`);
console.log(`o2.isLoading = ${o2.isLoading}`);

console.log("done");
