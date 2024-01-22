"use strict";
// 속성과 메소드 (attribute & method)
const myObject = {
    // 속성
    name: "kyung min",
    age: 27,
    // 메소드
    getFamilyName: function () {
        return "Jeon";
    },
    getGender: () => "Male",
    getBloodType() {
        return "B";
    },
};
myObject.name;
myObject.age;
delete myObject.name;
myObject.getFamilyName();
myObject.getGender();
myObject.getBloodType();
myObject.age = 200;
myObject.age = -500;
// -> 이렇게 아무렇게나 데이터에 접근하면 문제가 발생할 수 있다.
// 접근에 제한을 줄 수 있는 getter setter
// 일반 객체에서는 X, Class로 만들어진 인스턴스 객체에서 사용할 수 있는 스펙
class Student {
    constructor(bloodType) {
        this._bloodType = bloodType;
    }
    // setter
    set bloodType(bType) {
        if (bType === "A" || bType === "B" || bType === "AB" || bType === "O") {
            this._bloodType = bType;
        }
    }
    // getter
    get bloodType() {
        return `${this._bloodType} 형`;
    }
}
const p = new Student("B");
p.bloodType;
p.bloodType = "C";
//# sourceMappingURL=attribute_method.js.map