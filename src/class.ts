export {};

function show(name: string, age: number) {
    console.log(name, age)
}

class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Person2 {
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
}

class Person3 {
    constructor(public name: string, public age: number) {}
}

const p1 = new Person('서정국', 33)
const p2 = new Person2('서정국', 33)
const p3 = new Person3('서정국', 33)
show(p1.name, p1.age)
show(p2.name, p2.age)
show(p3.name, p3.age)



