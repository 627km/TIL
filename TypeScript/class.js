"use strict";
class Shape1 {
    constructor(borderWidth = 0) {
        this.name = 'Shape'; // 읽기전용(내용 바꿀 수 없음)
        this._borderWidth = borderWidth;
    }
    set borderWidth(width) {
        if (width >= Shape1.MIN_BORDER_WIDTH && width <= Shape1.MAX_BORDER_WIDTH) {
            this._borderWidth = width;
        }
        else {
            throw new Error('borderWidth 허용 범위를 벗어난 동작을 시도했습니다.');
        }
    }
    get borderWidth() {
        return this._borderWidth;
    }
}
Shape1.MIN_BORDER_WIDTH = 0;
Shape1.MAX_BORDER_WIDTH = 30;
class Circle extends Shape1 {
    constructor(radius) {
        super();
        this.name = 'Circle';
        this.area = () => this._radius * this._radius * Math.PI;
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
}
class Rect extends Shape1 {
    constructor(width, height) {
        super();
        this.area = () => this._width * this._height;
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
}
const circle = new Circle(50);
const rect = new Rect(150, 200);
console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);
try {
    rect.borderWidth = 10; // min과 max사이의 값이 아닐 경우 에러가 발생하므로
}
catch (e) {
    console.log(e);
}
class myContainer {
    constructor(tagName, className) {
        this.getTagName = () => {
            return this.tagName;
        };
        this.getClassName = () => {
            return this.className;
        };
        this.tagName = tagName;
        this.className = className;
    }
}
//# sourceMappingURL=class.js.map