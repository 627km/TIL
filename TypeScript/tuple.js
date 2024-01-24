"use strict";
// 튜플 (원소의 수를 제약할 수 있는 데이터 유형)
const address = [14023, '서울시', '송파구'];
let [zipcode, address1] = address;
const bookData = [
    ['헨리 8세', '세익스피어', 1884],
    ['헨리 8세', '세익스피어', 1884],
];
bookData.push(['a', 'b', 23]); // [string, string, number]를 만족
function getArrayOne() {
    return [14023, '서울시', '송파구'];
}
function getArrayTwo() {
    return [14023, '서울시', '송파구'];
}
let address2 = getArrayTwo()[2]; // return 타입을 Address로 지정했으므로 두번째자리 -> string이 와야 함
// address2 = 123; <- 이렇게 하면 에러!!
//# sourceMappingURL=tuple.js.map