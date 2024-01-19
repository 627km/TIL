# Type Alias

-   변수에 string 타입을 정의해준다

    ```typescript
    let day: string = "월";
    let name: string = "Jin";
    ```

-   그런데.. 단순히 문자열이 아니라 요일이라는 의미와 이름이라는 의미를 주고 요일에는 '월'부터 '일'까지만 제한을 두고 싶으면..?

    ```typescript
    type DayOfWeek = "월" | "화" | "수" | "목" | "금" | "토" | "일";
    type Name = string;

    let day: DayOfWeek = "월";
    let name: Name = "jin";
    ```

-   이렇게 '월'부터 '일'까지만 가능한 DayOfWeek라는 타입별칭을 만들고 사용할 수 있고, name의 경우 문자열이지만 이름이라는 뜻을 갖고 사용할 것이라고 직관적으로 알 수 있다.

## 상속의 표현 (intersection)

# Interface

-   객체를 만들 때 객체는 이런 모양으로 만들어야 돼! 알려준다.

    ```typescript
    type Name = string;
    type YesOrNo = "Y" | "N";

    interface IUser {
        id: number;
        name: Name;
        email: string;
        receiveInfo: boolean;
        active: YesOrNo;
        address?: string; // '?'가 붙어있으면 optional 속성이다. (객체에 있어도 되고 없어도 되고..)
    }

    const user: IUser = {
        id: 1,
        name: "Jin",
        email: "jin@gmail.com",
        receiveInfo: false,
        active: "Y",
    };
    ```

-   user의 타입을 IUser로 지정해줬으므로 id를 문자열로 주거나 active에 'Y' 또는 'N'이외의 다른 값을 주면 오류라고 빨간 밑줄로 알려준다! (interface는 객체를 이렇게 만들어라! 명세같은 느낌이랄까..?)

## 상속의 표현 (extends)
