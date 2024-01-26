// 일급함수
// 인자로 받는 값, 리턴되는 값이 일반적인 데이터가 아니라 함수

// 1. 인자로 함수가 있는 경우
function ul(child) {
    return `<ul>${child}</ul>`;
}

function ol(child) {
    return `<ol>${child}</ol>`;
}

function makeLI(container, contents) {
    // container: 함수, contents: 배열
    const liList = [];
    for (const content of contents) {
        liList.push(`<li>${content}</li>`);
    }

    return container(liList.join(""));
}

const htmlUL = makeLI(ul, ["월", "화", "수", "목", "금", "토", "일"]);
const htmlOL = makeLI(ol, ["봄", "여름", "가을", "겨울"]);

console.log(htmlOL);
console.log(htmlUL);

// 2. 반환 값으로 함수가 있는 경우
function salePrice(discountRate, price) {
    return price - price * (discountRate * 0.01);
}

console.log("여름 세일 - " + salePrice(30, 567000));
console.log("겨울 세일 - " + salePrice(10, 567000));

function discountPrice(discountRate) {
    return function (price) {
        return price - price * (discountRate * 0.01);
    };
}

// discountPrice 함수의 return값이 함수이므로 호출을 두번하고 있다.
console.log("여름 세일 - " + discountPrice(30)(567000));
console.log("겨울 세일 - " + discountPrice(10)(567000));

// 위에 처럼하면 조금 이상하니까 처음에 호출하는 discountPrice함수를 변수에 담아 보겠다.
let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

// 반환값으로 함수가 오는 경우 변수에 담을 수 있으므로 직관적으로 어떤 코드인지 알기 쉽다.
console.log("여름 세일 - " + summerPrice(567000));
console.log("겨울 세일 - " + winterPrice(567000));
