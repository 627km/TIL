// for of
// for of문은 배열의 요소 하나하나를 다룰 때 유용하다. (배열을 순회할 때 유용하다.)
const arr = ["a", "b", "c", "d"];

for (const item of arr) {
    console.log(item);
}

// for in
// 배열에 있는 요소가 아니라 위치값(인덱스)를 읽는다. (배열보다는 객체에서 자주 쓰인다.)
for (const index in arr) {
    console.log(arr[index]);
}

// 객체의 경우 key값을 읽는다.
const obj = {
    color: "red",
    width: 200,
    height: 200,
};

for (const key in obj) {
    console.log(key);
}
