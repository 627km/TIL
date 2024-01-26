import { v4 } from 'uuid';

type UniqObject = {
    id: string;
    [key: string]: string | number | boolean;
};

const makeObject = (): UniqObject => ({
    //id: '1234', // id값을 유니크한 값으로 하기 위해 uuid를 import
    id: v4(),
});

console.log(makeObject());
console.log(makeObject());
