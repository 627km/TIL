// 생성기 함수 (generator function)
// 값을 반환 할 때 함수가 종료될지, 종료되지 않을 지 선택할 수 있는 함수

// generator 사용 x
function makeInfiniteEnergyGenerator() {
    let energy = 0;
    return function (booster = 0) {
        if (booster) {
            energy += booster;
        } else {
            energy++;
        }
        return energy;
    };
}

const energy = makeInfiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
    console.log(energy());
}

console.log(energy(5));

// generator 사용 o
function* infiniteEnergyGenerator() {
    let energy = 1;
    while (true) {
        // 무한루프
        const booster = yield energy; // yield :

        if (booster) {
            energy += booster;
        } else {
            energy++;
        }
    }
}

const energyGenerator = infiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
    console.log(energyGenerator.next()); // next()가 반환하는 값은 객체형태이다.
}

console.log(energyGenerator.next(5));

/*
next() 메소드 : 
generator 함수 본체 실행을 재개시킬 수 있는 메소드이다. 
멈춰 있는 것을 다시 동작하게 한다. 
i = 0: next 처음으로 호출 -> infiniteEnergyGenerator가 실행
yield: generator 함수 실행을 멈추고, 뒤에있는 값을 호출자에게 객체형태로 반환한다.
따라서, 코드에 무한루프 코드가 있지만 yield로 인해 멈추고 next()로 인해 재개함으로써 컨트롤 할 수 있다. 
*/
