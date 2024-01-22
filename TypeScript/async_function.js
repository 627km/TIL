"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 비동기 함수
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.floor(Math.random() * 10) % 2 === 0) {
                resolve("success");
            }
            else {
                reject("failure");
            }
        }, ms);
    });
}
// 콜백으로 제공되는 비동기 코드
delay(3000)
    .then((result) => {
    console.log("done promise!" + result);
})
    .catch((error) => {
    console.log("fail promise!" + error);
});
// 한줄 한줄 일반적인 코드(동기코드)처럼 작성하되 비동기코드를 구현
// 함수 앞에 async 붙여주기
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("start");
            const result = yield delay(3000); // 기존에 Promise 객체를 반환하는 함수가 있다면 앞에 await 붙여주기
            console.log("done async!" + result);
        }
        catch (e) {
            console.error("fail async!" + e);
        }
    });
}
main();
//# sourceMappingURL=async_function.js.map