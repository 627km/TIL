// 예외를 발생시키는 함수 생성
function doException() {
    throw new Error("WoW! 오류입니다.");
}

// 예외발생시키지 않는 일반적인 함수
function noException() {
    return true;
}

function callException(type) {
    if (type === "do") {
        doException();
    } else {
        noException();
    }
}
function main() {
    // 예외처리 (메인함수에서 예외처리해줌)
    try {
        callException("do");
    } catch (e) {
        console.log(e);
    } finally {
        console.log("done");
    }
}

main();
