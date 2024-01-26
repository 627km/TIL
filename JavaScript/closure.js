// 클로저 (closures)
// 특정 값을 보호하면서 그 값을 계속 사용할 수 있다는 장점이 있다.

function increment() {
    let saveNumber = 1;

    // 함수를 리턴한다.
    return function () {
        return saveNumber++;
    };
}

const inc = increment(); // saveNumber를 증가시키는 함수를 반환한다.

// 이때, inc()를 호출하면 saveNumber는 어디서 갖고올까..?
// 바로 increment()를 호출했을 때 saveNumber를 closure라는 공간에 저장해둔다.
console.log(inc());
console.log(inc());
console.log(inc());
