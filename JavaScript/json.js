// JSON (JavaScript Object Notation)
// JavaScript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷이다.
// 웹 어플리케이션에서 데이터를 전송할 때 일반적으로 사용 (서버 <-> 클라이언트)

/*
즉, 데이터를 받아와서 사용할 때는 JSON.parse()로 객체로 변경한 후 사용하고,
다시 저장하기 위해 서버로 전송할 때는 JSON.stringify()로 변경해서 보낸다. 
*/

// JSON은 double quote만 지원하고, key값은 double quote로 감싸줘야 한다.
const jsonString = `
    {
        "name": "Jeon KyungMin",
        "age" : 27,
        "bloodType": "B"
    }
`;

// 문법 오류떄문에 JSON.parse() 과정에서 오류가 발생할 수 있으므로 예외처리해줌
try {
    const myJson = JSON.parse(jsonString); // JSON.parse()로 객체화 시킬 수 있다.

    console.log(myJson.name); // 이제 이렇게 속성에 접근할 수 있다.
    // 객체를 데이터로 전송하기 위해 JSON으로 변경하고 싶으면 JSON.stringify()
    console.log(JSON.stringify(myJson));
} catch (e) {}
