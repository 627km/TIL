// 클래스
interface Container {
    tagName: string;
    className: string;
    Children?: string[];
    getTagName: () => string;
    getClassName: () => string;
}

abstract class Shape1 {
    public static MIN_BORDER_WIDTH = 0;
    public static MAX_BORDER_WIDTH = 30;

    public readonly name: string = 'Shape'; // 읽기전용(내용 바꿀 수 없음)
    protected _borderWidth: number;
    private action!: string; // !는 값을 세팅하지 않아도 되는 지시어

    constructor(borderWidth: number = 0) {
        this._borderWidth = borderWidth;
    }

    abstract area: () => number;

    set borderWidth(width: number) {
        if (width >= Shape1.MIN_BORDER_WIDTH && width <= Shape1.MAX_BORDER_WIDTH) {
            this._borderWidth = width;
        } else {
            throw new Error('borderWidth 허용 범위를 벗어난 동작을 시도했습니다.');
        }
    }
    get borderWidth(): number {
        return this._borderWidth;
    }
}

class Circle extends Shape1 {
    private _radius: number;
    public name: string = 'Circle';

    constructor(radius: number) {
        super();
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    area = () => this._radius * this._radius * Math.PI;
}

class Rect extends Shape1 {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        super();
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }

    area = () => this._width * this._height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);

try {
    rect.borderWidth = 10; // min과 max사이의 값이 아닐 경우 에러가 발생하므로
} catch (e) {
    console.log(e);
}

class myContainer implements Container {
    tagName: string;
    className: string;

    constructor(tagName: string, className: string) {
        this.tagName = tagName;
        this.className = className;
    }

    getTagName = () => {
        return this.tagName;
    };
    getClassName = () => {
        return this.className;
    };
}
