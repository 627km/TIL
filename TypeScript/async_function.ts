// 비동기 함수
function delay(ms: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.floor(Math.random() * 10) % 2 === 0) {
                resolve("success");
            } else {
                reject("failure");
            }
        }, ms);
    });
}

// 콜백으로 제공되는 비동기 코드
delay(3000)
    .then((result: string) => {
        console.log("done promise!" + result);
    })
    .catch((error: string) => {
        console.log("fail promise!" + error);
    });

// 한줄 한줄 일반적인 코드(동기코드)처럼 작성하되 비동기코드를 구현
// 함수 앞에 async 붙여주기
async function main() {
    try {
        console.log("start");
        const result = await delay(3000); // 기존에 Promise 객체를 반환하는 함수가 있다면 앞에 await 붙여주기
        console.log("done async!" + result);
    } catch (e) {
        console.error("fail async!" + e);
    }
}

main();
