interface Person {
    readonly name: string;
    age: number;
    [key: string]: string | number;
}

const p1: Person = { name: '꾸기', age: 33 };
const p2: Person = { name: '꾸기', age: 30 };
const p3: Person = { name: '꾸기', age: 45, birthday: '2022-01-10', sex: 'male'};

// p1.name = 'readonly라 이건 그라면 안되~'

interface Human {
    name: String;
    age: number;
    isYoungerThan(age: number): boolean;
}

class SomePerson implements Human {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    isYoungerThan(age: number): boolean {
        return true;
    }
}
