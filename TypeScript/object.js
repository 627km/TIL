"use strict";
// 객체를 만드는 방법
// 1. (구조변경에 용이하다.) (데이터와 구조를 분리)
function makeBox(width, height, borderRadius, backgroundColor) {
    return {
        width,
        height,
        borderRadius,
        backgroundColor,
    };
}
makeBox(100, 100, 0, "blue");
// 2. (데이터와 구조를 분리하지 않음)
let box = {
    width: 200,
    height: 200,
    borderRadius: 5,
    backgroundColor: "red",
};
// 3. (클래스를 사용하기) (인스턴스 객체를 반환)
class Shape {
    constructor(width, height, borderRadius, backgroundColor) {
        this.width = width;
        this.height = height;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
    }
}
const boxShape = new Shape(10, 10, 0, "blue");
if (boxShape instanceof Shape) {
    // 어떤 클래스를 통해 만든 인스턴스(객체)인지 확인 가능
    console.log("Yes");
}
const box1 = box;
// box를 참조하는 것을 끊고 복사하는 방법
const box2 = Object.assign({}, box);
const box4 = Object.assign(Object.assign({}, box), { color: "blue" });
const box3 = JSON.parse(JSON.stringify(box));
//# sourceMappingURL=object.js.map