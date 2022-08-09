export {}

function fun(a: number, b: number | string) {
    const v1: number | string = a;
    const v2: number = a;
}

interface Person {
    name: string;
    age: number;
}

interface Product {
    name: string;
    age: number;
}

const person: Person = { name: 'ggugi', age: 33 }
const product: Product = person // <--- 내부 구조가 같기 때문에 할당이 가능하다.



