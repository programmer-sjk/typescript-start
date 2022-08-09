// 여기서 a,b 타입은 각각 number, string 이다.
let a = 123;
let b = 'abc';

// const는 값이 변하지 않기 때문에 엄격하게 타입이 정해진다.
// 여기서 c,d 타입은 각각 123, 'abc' 이다. 요건 몰랐네.
const c = 123;
const d = 'abc';

// 그래서 아래 코드는 에러가 발생한다.
const e: typeof c = 234;

